const fs = require('fs');

let code = fs.readFileSync('src/pages/Courses.tsx', 'utf-8');

// 1. Add CardVisualAccent import
if (!code.includes('CardVisualAccent')) {
  code = code.replace(
    'import { coursesData } from "../data/coursesData";',
    'import { coursesData } from "../data/coursesData";\nimport { CardVisualAccent } from "../components/CardVisualAccent";'
  );
}

// 2. Change lg:grid-cols-4 to lg:grid-cols-3
code = code.replace('lg:grid-cols-4', 'lg:grid-cols-3');

// 3. Change h-[150px] to h-[200px]
code = code.replace('h-[150px]', 'h-[200px]');

// 4. Add referrerPolicy="no-referrer" to the img tag
code = code.replace(
  'className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"',
  'className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"\n                    referrerPolicy="no-referrer"'
);

// 5. Inject <CardVisualAccent /> right above the <p className="text-slate-500..."> line
code = code.replace(
  '<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">',
  '<div className="mb-4 mt-1"><CardVisualAccent type={course.visualType} data={course.visualData} colorTheme={course.colorTheme} /></div>\n                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">'
);

fs.writeFileSync('src/pages/Courses.tsx', code);
console.log("Updated Courses.tsx successfully");
