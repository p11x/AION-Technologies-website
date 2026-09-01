import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { enterpriseServicesData } from "../data/enterpriseServicesData";
import { EnterpriseServiceTemplate } from "../components/EnterpriseServiceTemplate";

export default function EnterpriseServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = enterpriseServicesData.find(s => s.slug === slug);
  
  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
  }, [service, navigate]);
  
  if (!service) return null;
  
  const relatedServices = enterpriseServicesData.filter(s => 
    service.relatedServiceSlugs?.includes(s.slug)
  );
  
  return <EnterpriseServiceTemplate item={service} relatedServices={relatedServices} />;
}
