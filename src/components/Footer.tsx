import { Shield, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-glass bg-background px-6 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                TruthLens<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="mb-8 max-w-sm text-muted-foreground">
              Fighting digital deception with advanced Generative AI analysis. 
              Making deepfake detection accessible, transparent, and explainable 
              for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
              Platform
            </h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#features" className="transition-colors hover:text-primary">Features</a></li>
              <li><a href="#how-it-works" className="transition-colors hover:text-primary">How it Works</a></li>
              <li><a href="#use-cases" className="transition-colors hover:text-primary">Use Cases</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-glass pt-8 text-center text-sm text-muted-foreground md:mt-20">
          <p>© {new Date().getFullYear()} TruthLens AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
