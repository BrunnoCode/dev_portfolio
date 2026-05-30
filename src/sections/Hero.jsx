import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedButtonBorder } from "../components/AnimatedButtonBorder";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/public/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green dots */}
      <div>
        {[...Array(50)].map(() => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer · Multiplatform Application Development
              </span>
            </div>

            {/* HeadLine */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Desarrollando{" "}
                <span className="text-primary glow-text">digital apps</span>
                <br />
                Con experiencia y<br />
                <span className="font-serif italic font-normal text-white">
                  precisión.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                Entusiasta de la tecnología, el aprendizaje continuo y la
                creación de soluciones prácticas. Actualmente estudiando
                Desarrollo de Aplicaciones Multiplataforma (DAM) en iFP
                Barcelona.
              </p>
            </div>

            {/* CTAs */}
            <div>
              <Button size="lg">
                Contáctame <ArrowRight className="w-5 h-5" />
              </Button>
             <AnimatedButtonBorder/>
            </div>
            
          </div>
          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  );
};
