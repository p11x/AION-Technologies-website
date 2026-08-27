import { useEffect } from "react";
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
