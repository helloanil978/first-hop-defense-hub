import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Enterprises Protected" },
    { icon: Award, number: "99.9%", label: "Threat Detection Rate" },
    { icon: Globe, number: "24/7", label: "Global Monitoring" },
    { icon: Clock, number: "<5min", label: "Average Response Time" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose First Hop Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At First Hop Security, we understand that cybersecurity is not just about technology—it's about 
              protecting your business, your customers, and your reputation. Our team of certified security 
              professionals brings decades of experience in enterprise cybersecurity.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide proactive, comprehensive security solutions that evolve with the threat landscape, 
              ensuring your organization stays one step ahead of cybercriminals.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule a Security Assessment
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Our Certifications & Compliance</h3>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>CISSP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>HIPAA Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;