import { Card } from "@/components/ui/card";
import { Heart, Book, Code, Palette } from "lucide-react";

export default function About() {
  const interests = [
    { icon: Book, label: "閱讀寫作", color: "text-blue-500" },
    { icon: Code, label: "程式設計", color: "text-green-500" },
    { icon: Palette, label: "藝術創作", color: "text-purple-500" },
    { icon: Heart, label: "運動音樂", color: "text-pink-500" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-heading">
            關於我
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            在這裡，我分享我的學習旅程、創作靈感和生活點滴
          </p>
        </div>

        <Card className="p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              大家好！我是小明，目前就讀國中二年級。我喜歡探索新事物，對世界充滿好奇心。
              在課業之餘，我熱愛閱讀各種書籍，也喜歡動手做些小創作。
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              這個部落格是我記錄成長、分享學習心得和展示作品的小天地。
              希望透過這個平台，我能與同學們交流想法，一起進步成長。
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              歡迎你瀏覽我的日記、觀看我的影片，以及欣賞我的作品。
              如果你有任何想法或建議，都歡迎與我分享！
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-elevate transition-all"
              data-testid={`card-interest-${index}`}
            >
              <interest.icon className={`h-8 w-8 mx-auto mb-3 ${interest.color}`} />
              <p className="font-medium">{interest.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
