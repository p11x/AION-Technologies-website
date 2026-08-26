import express from 'express';
import { Resend } from 'resend';
import path from 'path';

async function startServer() {
  const app = express();
  app.use(express.json());

  const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

  app.post('/api/send-email', async (req, res) => {
    try {
      const data = req.body;
      const response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'hr@aiontechnology.in',
        subject: 'New Registration - AION Technology',
        html: `
          <h2>New Registration Application</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>DOB:</strong> ${data.dob}</p>
          <p><strong>Gender:</strong> ${data.gender}</p>
          <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.zipCode}</p>
          
          <h3>Qualification</h3>
          <p><strong>Highest Qual:</strong> ${data.qualification}</p>
          <p><strong>Branch:</strong> ${data.branch}</p>
          <p><strong>University:</strong> ${data.university}</p>
          <p><strong>Grad Year:</strong> ${data.gradYear}</p>

          <h3>Role & Expectations</h3>
          <p><strong>Exp Type:</strong> ${data.experienceType}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Skills:</strong> ${data.skills}</p>
          <p><strong>Roles:</strong> ${data.preferredRoles}</p>
          <p><strong>Expected CTC:</strong> ${data.expectedCtc} Lakhs</p>
          <p><strong>Work Mode:</strong> ${data.workMode}</p>

          <h3>Work Experience</h3>
          <p><strong>Total Exp:</strong> ${data.totalExperience}</p>
          <p><strong>Last Title:</strong> ${data.lastJobTitle}</p>
          <p><strong>Last Employer:</strong> ${data.lastEmployer}</p>
          <p><strong>Prev Employers:</strong> ${data.previousEmployers}</p>
          <p><strong>References:</strong> ${data.references}</p>
        `
      });
      res.json(response);
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: error.message });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server listening on port ${PORT}`);
  });
}

startServer();
