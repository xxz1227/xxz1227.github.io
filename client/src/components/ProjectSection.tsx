import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import artImage from "@assets/generated_images/Art_project_showcase_137ca0d3.png";
import codingImage from "@assets/generated_images/Coding_project_display_77fdba7b.png";
import scienceImage from "@assets/generated_images/Science_project_showcase_11187b51.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "水彩風景畫作品",
    description: "用水彩描繪了我最喜歡的公園一角，希望能捕捉大自然的美麗與寧靜。",
    image: artImage,
    tags: ["美術", "水彩"],
  },
  {
    id: 2,
    title: "簡易計算機程式",
    description: "我的第一個程式作品！使用 Python 製作的簡單計算機，可以進行基本運算。",
    image: codingImage,
    tags: ["程式", "Python"],
    link: "#",
  },
  {
    id: 3,
    title: "科展專題研究",
    description: "探討植物生長與光照的關係，這是我和同學一起完成的科展作品。",
    image: scienceImage,
    tags: ["科學", "實驗"],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-heading">
            我的作品
          </h2>
          <p className="text-muted-foreground">
            展示我的創作成果與學習歷程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-elevate transition-all group flex flex-col"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => console.log('View project:', project.id)}
                    data-testid={`button-view-${project.id}`}
                  >
                    查看詳情
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
