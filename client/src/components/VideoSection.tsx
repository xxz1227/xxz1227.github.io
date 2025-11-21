import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "我的學習方法分享",
    description: "分享我如何規劃讀書時間，以及一些有效的學習技巧",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "學習",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "校園生活 Vlog",
    description: "記錄一天的校園生活，從早自習到放學後的社團活動",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "生活",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);

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
                  setPlayingVideo(video);
                  console.log('Play video:', video.id);
                }}
              >
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {playingVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div 
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={playingVideo.embedUrl}
                title={playingVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
