import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { coursesData } from "../data/coursesData";
import { DetailTemplate } from "../components/DetailTemplate";

export default function TrainingDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.slug === slug);
  
  useEffect(() => {
    if (!service) {
      navigate('/training', { replace: true });
    }
  }, [service, navigate]);
  
  if (!service) return null;
  
  const relatedCourses = coursesData.filter(course => 
    service.relatedModuleSlugs?.includes(course.slug)
  );

  return <DetailTemplate item={service} relatedCourses={relatedCourses} backLink="/training" backText="Back to Training" />;
}
