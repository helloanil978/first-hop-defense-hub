import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border border-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Shield className="w-20 h-20 text-primary animate-pulse" />
            <div className="absolute inset-0 w-20 h-20 border-2 border-primary rounded-full animate-spin opacity-20"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          First Hop Security
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Your first line of defense in the digital frontier. Comprehensive cybersecurity solutions 
          tailored for enterprise-level protection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Protected Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary/10">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;