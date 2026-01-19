import DoubleLayerBackground from "@/components/DoubleLayerBackground";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ContentSections from "@/components/sections/ContentSections";
import FormSection from "@/components/sections/FormSection";
import { useState, useRef } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    request: "",
    contact: ""
  });

  const formRef = useRef<HTMLElement>(null);
  const [formHighlight, setFormHighlight] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      setFormHighlight(true);
      setTimeout(() => setFormHighlight(false), 2000);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <DoubleLayerBackground variant="default" />
      </div>
      
      <HeroSection scrollToForm={scrollToForm} />
      <ProblemSection />
      <ContentSections />
      <FormSection 
        formRef={formRef}
        formHighlight={formHighlight}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
