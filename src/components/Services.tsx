import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Mail, Laptop, Network, Lock, AlertTriangle, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Security Operations Center (SOC)",
      description: "24/7 monitoring and threat detection with real-time incident response capabilities.",
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Security Analytics"]
    },
    {
      icon: Database,
      title: "Data Loss Prevention (DLP)",
      description: "Protect sensitive data from unauthorized access, use, and transmission.",
      features: ["Data Classification", "Content Monitoring", "Policy Enforcement", "Compliance Reporting"]
    },
    {
      icon: Mail,
      title: "Email Security",
      description: "Advanced email protection against phishing, malware, and business email compromise.",
      features: ["Anti-Phishing", "Malware Detection", "Email Encryption", "Threat Intelligence"]
    },
    {
      icon: Laptop,
      title: "Endpoint Security",
      description: "Comprehensive endpoint protection with advanced threat detection and response.",
      features: ["Antivirus Protection", "EDR Capabilities", "Device Control", "Patch Management"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Secure your network infrastructure with next-generation firewall solutions.",
      features: ["Firewall Management", "Network Monitoring", "Intrusion Detection", "VPN Solutions"]
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Identify, assess, and remediate security vulnerabilities across your infrastructure.",
      features: ["Vulnerability Scanning", "Risk Assessment", "Patch Prioritization", "Compliance Tracking"]
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Control user access and manage digital identities across your organization.",
      features: ["Single Sign-On", "Multi-Factor Auth", "Access Controls", "Identity Governance"]
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Expert cybersecurity guidance and strategic planning for your business.",
      features: ["Security Assessments", "Policy Development", "Compliance Guidance", "Training Programs"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Security Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your enterprise 
            from evolving digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-border bg-card hover:border-primary/50">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="text-sm space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-foreground/80 flex items-center justify-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;