import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Shield } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Early Detection",
    value: "95%",
    description: "Success rate in early disease detection and prevention of critical conditions"
  },
  {
    icon: Clock,
    title: "Reduced Travel Time",
    value: "80%",
    description: "Average reduction in travel time for medical consultations and treatments"
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    value: "70%",
    description: "Healthcare cost reduction for rural families through digital solutions"
  },
  {
    icon: Shield,
    title: "Medicine Availability",
    value: "98%",
    description: "Improved availability of medicines and vaccines in remote areas"
  }
];

export const Impact = () => {
  return (
    <section className="py-20 px-4 bg-medical-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Measurable Impact on
            <span className="block text-primary">Rural Healthcare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology-driven approach has delivered significant improvements 
            in healthcare accessibility, affordability, and outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-medical transition-all duration-300 hover:-translate-y-1 text-center border-border/50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {impact.value}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {impact.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};