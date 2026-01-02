import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";
import { videos } from "@/data/content";

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-heading">
            我的影片
          </h2>
          <p className="text-muted-foreground">
            用影像記錄生活，分享更多精彩瞬間
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="overflow-hidden hover-elevate transition-all group"
              data-testid={`card-video-${video.id}`}
            >
              <div 
                className="relative h-64 bg-muted cursor-pointer"
                onClick={() => {
                  setPlayingVideo(video.id);
                }}
              >
                {playingVideo === video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid={`iframe-video-${video.id}`}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {video.category}
                    </Badge>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
