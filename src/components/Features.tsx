import { Card, CardContent } from "@/components/ui/card";
import { Video, Activity, Brain, Truck, FileText } from "lucide-react";
import telemedicineIcon from "@/assets/telemedicine-icon.jpg";
import iotMonitoring from "@/assets/iot-monitoring.jpg";
import aiAnalysis from "@/assets/ai-analysis.jpg";
import droneDelivery from "@/assets/drone-delivery.jpg";
import healthRecords from "@/assets/health-records.jpg";

const features = [
  {
    icon: Video,
    title: "Telemedicine Kiosks",
    description: "Virtual consultations with doctors and specialists, reducing travel time and costs for rural patients.",
    image: telemedicineIcon,
    color: "from-primary to-medical-teal"
  },
  {
    icon: Activity,
    title: "IoT Health Monitoring",
    description: "Real-time monitoring of vitals like blood pressure, glucose, ECG, and oxygen levels with cloud connectivity.",
    image: iotMonitoring,
    color: "from-medical-teal to-accent"
  },
  {
    icon: Brain,
    title: "AI/ML Analytics",
    description: "Intelligent analysis for early disease detection, predictive analytics, and AI chatbots in local languages.",
    image: aiAnalysis,
    color: "from-accent to-trust-green"
  },
  {
    icon: Truck,
    title: "Drone Delivery",
    description: "Fast delivery of medicines, vaccines, and emergency supplies to remote locations via autonomous drones.",
    image: droneDelivery,
    color: "from-trust-green to-primary"
  },
  {
    icon: FileText,
    title: "Secure Health Records",
    description: "Blockchain-secured cloud storage with portable health IDs for seamless medical record access.",
    image: healthRecords,
    color: "from-primary to-medical-teal"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated technology platform brings modern healthcare to rural communities 
            through innovative solutions designed for accessibility and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-card">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};