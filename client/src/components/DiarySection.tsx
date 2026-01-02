import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { diaries } from "@/data/content";

export default function DiarySection() {

  return (
    <section id="diary" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-heading">
            我的日記
          </h2>
          <p className="text-muted-foreground">
            記錄生活的美好時刻與成長的點滴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {diaries.map((entry) => (
            <Link key={entry.id} href={`/diary/${entry.slug}`}>
              <Card 
                className="overflow-hidden hover-elevate transition-all group cursor-pointer"
                data-testid={`card-diary-${entry.id}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {entry.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 line-clamp-2">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {entry.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {entry.readTime}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {entry.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    data-testid={`button-read-${entry.id}`}
                  >
                    閱讀全文 →
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
