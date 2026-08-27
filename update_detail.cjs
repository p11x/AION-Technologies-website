const fs = require('fs');

// 1. Read ServiceDetail.tsx
const code = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf-8');

// 2. Extract the component logic to DetailTemplate.tsx
let templateCode = code;

templateCode = templateCode.replace(
  'export default function ServiceDetail() {\n  const { slug } = useParams();\n  const navigate = useNavigate();\n  \n  const service = servicesData.find(s => s.slug === slug);\n  const [activeTab, setActiveTab] = useState(0);\n  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);\n\n  useEffect(() => {\n    if (!service) {\n      navigate(\'/services\', { replace: true });\n    }\n    // reset tab on navigate\n    setActiveTab(0);\n  }, [service, navigate]);\n  \n  if (!service) return null;\n\n  const Icon = service.icon;\n  \n  // Find related courses\n  const relatedCourses = coursesData.filter(course => \n    service.relatedModuleSlugs.includes(course.slug)\n  );',
  `export const DetailTemplate = ({ item, relatedCourses, backLink, backText }: { item: any, relatedCourses: any[], backLink: string, backText: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // reset tab on change
  useEffect(() => {
    setActiveTab(0);
  }, [item]);

  const service = item;
  const Icon = service.icon;
`
);

// We don't want "Back to Services" hardcoded
templateCode = templateCode.replace(
  '<ArrowLeft className="w-4 h-4" /> Back to Services\n          </Link>',
  '<ArrowLeft className="w-4 h-4" /> {backText}\n          </Link>'
);
templateCode = templateCode.replace(
  '<Link to="/services"',
  '<Link to={backLink}'
);

templateCode = templateCode.replace(
  'import { servicesData } from "../data/servicesData";\nimport { coursesData } from "../data/coursesData";',
  '// Shared template'
);

// Fix imports in templateCode
// Add `import { Link } from "react-router-dom";` etc.
// Not worrying about full AST, just regex replacements.

fs.writeFileSync('src/components/DetailTemplate.tsx', templateCode);

// 3. Rewrite ServiceDetail.tsx to use DetailTemplate
const newServiceDetail = `import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { coursesData } from "../data/coursesData";
import { DetailTemplate } from "../components/DetailTemplate";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.slug === slug);
  
  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
  }, [service, navigate]);
  
  if (!service) return null;
  
  const relatedCourses = coursesData.filter(course => 
    service.relatedModuleSlugs?.includes(course.slug)
  );

  return <DetailTemplate item={service} relatedCourses={relatedCourses} backLink="/services" backText="Back to Services" />;
}
`;
fs.writeFileSync('src/pages/ServiceDetail.tsx', newServiceDetail);

// 4. Rewrite CourseDetail.tsx to use DetailTemplate
const newCourseDetail = `import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { DetailTemplate } from "../components/DetailTemplate";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.slug === slug);
  
  useEffect(() => {
    if (!course) {
      navigate('/courses', { replace: true });
    }
  }, [course, navigate]);
  
  if (!course) return null;
  
  // For courses, let's find other courses in the same category (excluding self) up to 3
  const relatedCourses = coursesData
    .filter(c => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  return <DetailTemplate item={course} relatedCourses={relatedCourses} backLink="/courses" backText="Back to Courses" />;
}
`;
fs.writeFileSync('src/pages/CourseDetail.tsx', newCourseDetail);
