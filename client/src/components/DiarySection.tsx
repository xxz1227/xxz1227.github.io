import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import studyImage from "@assets/generated_images/Study_diary_header_0dd4220c.png";
import memoryImage from "@assets/generated_images/Diary_memory_photo_a7d01845.png";

interface DiaryEntry {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
}

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    title: "期中考後的反思",
    date: "2024-11-05",
    excerpt: "這次期中考讓我學到很多。雖然數學沒有考得很理想，但我發現了自己需要加強的地方...",
    image: studyImage,
    category: "學習",
    readTime: "3 分鐘",
  },
  {
    id: 2,
    title: "秋天的公園散步",
    date: "2024-10-28",
    excerpt: "今天下午和家人一起去公園散步，看到滿地的落葉，突然覺得秋天真的很美...",
    image: memoryImage,
    category: "生活",
    readTime: "2 分鐘",
  },
  {
    id: 3,
    title: "我的第一個程式作品",
    date: "2024-10-15",
    excerpt: "花了一個星期終於完成了第一個小遊戲！雖然功能很簡單，但看到自己寫的程式能運作，真的超有成就感...",
    image: studyImage,
    category: "創作",
    readTime: "4 分鐘",
  },
];

export default function DiarySection() {
  const [selectedDiary, setSelectedDiary] = useState<DiaryEntry | null>(null);

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
          {diaryEntries.map((entry) => (
            <Card 
              key={entry.id} 
              className="overflow-hidden hover-elevate transition-all group"
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
                  onClick={() => {
                    setSelectedDiary(entry);
                    console.log('Read diary:', entry.id);
                  }}
                  data-testid={`button-read-${entry.id}`}
                >
                  閱讀全文 →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedDiary && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDiary(null)}
          >
            <Card 
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img
                  src={selectedDiary.image}
                  alt={selectedDiary.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <Badge className="mb-4">{selectedDiary.category}</Badge>
                <h2 className="text-3xl font-semibold mb-4">{selectedDiary.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {selectedDiary.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedDiary.readTime}
                  </span>
                </div>
                <div className="prose max-w-none">
                  <p className="text-base leading-relaxed mb-4">{selectedDiary.excerpt}</p>
                  <p className="text-base leading-relaxed">
                    這是完整的日記內容。在實際應用中，這裡會顯示更多詳細的內容和想法分享。
                    透過記錄這些點滴，我希望能夠回顧自己的成長軌跡，也能與同學們分享我的經歷。
                  </p>
                </div>
                <Button
                  className="mt-6"
                  onClick={() => setSelectedDiary(null)}
                  data-testid="button-close-diary"
                >
                  關閉
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
