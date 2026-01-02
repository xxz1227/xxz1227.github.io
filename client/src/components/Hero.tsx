import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const profileImage = "/attached_assets/generated_images/Student_profile_photo_0452db23.png";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${profileImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          嗨！我是小明
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          一個熱愛學習、創作與分享的國中生
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          variant="outline"
          className="rounded-full backdrop-blur-md bg-white/20 text-white border-white/30 hover:bg-white/30"
          data-testid="button-scroll-about"
        >
          探索我的世界
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}
