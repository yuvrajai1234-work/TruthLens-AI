import { Brain, Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ExplainabilityPanelProps {
  anomalies: any[];
  technicalDetails: any;
}

const ExplainabilityPanel = ({ anomalies, technicalDetails }: ExplainabilityPanelProps) => {
  return (
    <div className="rounded-2xl border border-glass bg-glass backdrop-blur-xl shadow-card">
      <div className="border-b border-glass p-6">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            EXPLAIN: Gemini Vision Analysis
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Generative AI-powered forensic reasoning
        </p>
      </div>

      <div className="p-6 space-y-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="detection-methods" className="border-glass">
            <AccordionTrigger className="text-foreground hover:text-primary">
              Detection Methods
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <div className="rounded-lg bg-secondary/50 p-3">
                <h5 className="font-medium text-foreground mb-1">EfficientNet-B0 CNN</h5>
                <p>Processes video frames to extract facial features and detect synthesization patterns at the pixel level.</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3">
                <h5 className="font-medium text-foreground mb-1">Google Gemini Vision</h5>
                <p>Multimodal analysis of suspected frames to identify high-level semantic inconsistencies and metadata anomalies.</p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3">
                <h5 className="font-medium text-foreground mb-1">Temporal Artifact Detection</h5>
                <p>Analyzing frame-to-frame continuity and audio-visual synchronization (lip-sync alignment).</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="key-indicators" className="border-glass">
            <AccordionTrigger className="text-foreground hover:text-primary">
              Key Indicators
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="rounded-lg bg-secondary/50 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-foreground">{anomaly.type}</h5>
                    <span className="text-xs text-destructive">{anomaly.confidence}%</span>
                  </div>
                  <p>{anomaly.description}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technical-details" className="border-glass">
            <AccordionTrigger className="text-foreground hover:text-primary">
              Technical Details
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              <div className="space-y-2">
                {Object.entries(technicalDetails).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-medium text-foreground">{value as string}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <h5 className="font-medium text-foreground mb-1">Forensic Pipeline</h5>
              <p className="text-muted-foreground">
                Our hybrid approach combines CNN pixel-level precision with Gemini's high-level semantic understanding 
                to provide the most comprehensive deepfake detection available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainabilityPanel;
