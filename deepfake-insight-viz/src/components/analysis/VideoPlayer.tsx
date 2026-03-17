import { useRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FaceBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface VideoPlayerProps {
  videoUrl: string;
  selectedFrame: number | null;
  faceBox?: FaceBox | null;
}

const VideoPlayer = ({ videoUrl, selectedFrame, faceBox }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current && selectedFrame !== null) {
      videoRef.current.currentTime = selectedFrame * 0.5;
    }
  }, [selectedFrame]);

  useEffect(() => {
    setVideoReady(false);
  }, [videoUrl]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const box = faceBox ?? { left: 32, top: 15, width: 36, height: 55 };

  const lipBox = {
    left: box.left + box.width * 0.1,
    top: box.top + box.height * 0.65,
    width: box.width * 0.5,
    height: box.height * 0.2,
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-glass bg-glass backdrop-blur-xl shadow-card">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-primary/20 to-transparent animate-scan" />
      </div>

      <div className="absolute top-4 left-4 z-20 rounded-lg border border-destructive/50 bg-destructive/10 px-3 py-1 backdrop-blur-sm">
        <span className="text-xs font-medium text-destructive">
          ANOMALY DETECTED
        </span>
      </div>

      <div className="absolute top-4 right-4 z-20 rounded-lg border border-primary/50 bg-primary/10 px-3 py-1 backdrop-blur-sm">
        <span className="text-xs font-medium text-primary">SCANNING</span>
      </div>

      {/* Video */}
      <div className="relative aspect-video bg-black flex items-center justify-center">
        {hasError ? (
          <div className="text-center p-8">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <Pause className="h-8 w-8 text-destructive" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Media Unaccessible</h4>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              This video summary uses a temporary link that has expired. New analyses will be stored permanently in our secure vault.
            </p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              className="h-full w-full object-contain"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={() => setVideoReady(true)}
              onError={() => setHasError(true)}
            />
            
            {/* Play/Pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                onClick={togglePlay}
                className="h-16 w-16 rounded-full bg-glass backdrop-blur-xl hover:bg-card hover:shadow-glow"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-1" />
                )}
              </Button>
            </div>
          </>
        )}
      </div>

        {videoReady && (
          <>
            <div
              className="absolute rounded-lg pointer-events-none z-20 animate-pulse-glow"
              style={{
                left: `${box.left}%`,
                top: `${box.top}%`,
                width: `${box.width}%`,
                height: `${box.height}%`,
                border: "2px solid #ef4444",
                boxShadow: "0 0 8px #ef444444",
              }}
            >
              <span
                className="absolute -top-5 left-0 text-xs font-medium whitespace-nowrap px-1 rounded"
                style={{ color: "#ef4444", backgroundColor: "rgba(0,0,0,0.65)" }}
              >
                Face Detection
              </span>
            </div>

            <div
              className="absolute rounded-lg pointer-events-none z-20"
              style={{
                left: `${lipBox.left}%`,
                top: `${lipBox.top}%`,
                width: `${lipBox.width}%`,
                height: `${lipBox.height}%`,
                border: "2px solid #facc15",
                boxShadow: "0 0 8px #facc1544",
              }}
            >
              <span
                className="absolute -top-5 left-0 text-xs font-medium whitespace-nowrap px-1 rounded"
                style={{ color: "#facc15", backgroundColor: "rgba(0,0,0,0.65)" }}
              >
                Lip Sync
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;