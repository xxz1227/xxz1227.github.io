import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DiarySection from "@/components/DiarySection";
import VideoSection from "@/components/VideoSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <DiarySection />
      <VideoSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
