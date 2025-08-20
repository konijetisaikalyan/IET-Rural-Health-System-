import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Cloud, Stethoscope, Truck } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Patient Registration",
    description: "Rural patients register through mobile app or kiosk with basic health information and ID verification."
  },
  {
    icon: Stethoscope,
    title: "Health Assessment",
    description: "IoT devices measure vitals while AI chatbot conducts preliminary health assessment in local language."
  },
  {
    icon: Cloud,
    title: "Data Analysis",
    description: "Patient data is securely transmitted to cloud where AI/ML models analyze for early disease detection."
  },
  {
    icon: Truck,
    title: "Treatment & Delivery",
    description: "Based on analysis, telemedicine consultation is scheduled and medicines delivered via drone if needed."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures quick, efficient, and reliable healthcare 
            delivery from registration to treatment completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm font-bold text-primary mb-2">
                    STEP {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-white rounded-full font-semibold hover:shadow-medical transition-all duration-300 hover:scale-105 cursor-pointer">
            Start Your Healthcare Journey
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};