import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { works } from "@/data/content";

export default function WorkDetail() {
  const [, params] = useRoute("/work/:slug");
  const slug = params?.slug;

  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">找不到此作品</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回首頁
            </Button>
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
              {work.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {work.description}
            </p>

            {work.image && (
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {work.link && (
              <Button
                variant="outline"
                onClick={() => window.open(work.link, '_blank')}
                data-testid="button-link"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                查看專案
              </Button>
            )}
          </div>

          <div>
            <MarkdownContent content={work.content} />
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                <ArrowLeft className="w-4 h-4" />
                返回首頁
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

