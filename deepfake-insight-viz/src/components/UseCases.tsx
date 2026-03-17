import { Newspaper, GraduationCap, Users, CheckCircle2 } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      role: "Journalists",
      description: "Verify source material in seconds. Stop misinformation before it hits the headlines with evidence-based reporting.",
      icon: <Newspaper className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
      benefits: ["Fast turn-around", "Source verification", "Evidence logs"]
    },
    {
      role: "Students",
      description: "Learn to identify digital manipulation. Use TruthLens as an educational tool for media literacy and AI ethics.",
      icon: <GraduationCap className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      benefits: ["Media literacy", "AI research", "Skill building"]
    },
    {
      role: "Everyday Users",
      description: "Protect yourself from social engineering and viral scams. Quickly check suspicious videos before sharing.",
      icon: <Users className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800",
      benefits: ["Scam prevention", "Peace of mind", "Easy to use"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Empowering Everyone
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            TruthLens AI is designed to be accessible for professionals and individuals alike.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {cases.map((useCase, index) => (
            <div key={index} className="flex flex-col rounded-3xl overflow-hidden border border-glass bg-background shadow-xl transition-all duration-300 hover:shadow-glow/20">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={useCase.image} 
                  alt={useCase.role}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="rounded-xl bg-primary px-3 py-3 text-primary-foreground shadow-lg">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.role}</h3>
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
