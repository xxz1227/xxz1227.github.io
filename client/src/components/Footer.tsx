import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> by 小明
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2024 我的個人部落格. 持續學習，不斷成長
        </p>
      </div>
    </footer>
  );
}
