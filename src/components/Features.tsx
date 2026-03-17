import { Zap, Eye, BarChart3, Lock, Globe, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "EfficientNet Core",
      description: "Powered by the EfficientNet-B0 CNN architecture, specifically trained to identify generative artifacts at the pixel level with high precision.",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gemini Vision Analysis",
      description: "Google Gemini 1.5 Pro Vision transforms raw detection data into human-readable forensic explanations and identifies semantic anomalies.",
      icon: <Eye className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Visual Heatmaps",
      description: "Interaction heatmaps pinpoint manipulated facial features, including inconsistent blink rates and mouth movements.",
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Automated Reporting",
      description: "Generate professional, human-readable PDF reports suitable for journalistic verification and academic research.",
      icon: <FileText className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Privacy First",
      description: "Your data is encrypted and processed in secure environments. We never store your uploaded videos without permission.",
      icon: <Lock className="h-6 w-6" />,
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      title: "Global Reach",
      description: "Detect deepfakes across different languages, accents, and cross-cultural media formats with high accuracy.",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Why Choose TruthLens AI?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide more than just a 'Real' or 'Fake' verdict. We provide evidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-glass bg-glass p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 text-white shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
