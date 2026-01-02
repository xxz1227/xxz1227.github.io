import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: any[];
  works: any[];
  videos: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
    works: [],
    videos: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          // Validate image URL
          if (diary.image && !diary.image.startsWith("/attached_assets/")) {
            console.warn(`Warning: Diary "${diary.title}" image should start with "/attached_assets/": ${diary.image}`);
          }
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load works
  try {
    const worksDir = resolve(contentPath, "works");
    const workFiles = await readdir(worksDir);
    for (const file of workFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(worksDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const work = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          work.slug = slug;
          // Validate image URL
          if (work.image && !work.image.startsWith("/attached_assets/")) {
            console.warn(`Warning: Work "${work.title}" image should start with "/attached_assets/": ${work.image}`);
          }
          data.works.push(work);
        }
      }
    }
  } catch (error) {
    console.warn("Failed to load works:", error);
  }

  // Load videos
  try {
    const videosFile = resolve(contentPath, "videos", "videos.yaml");
    const content = await readFile(videosFile, "utf-8");
    const videosData = yaml.load(content) as any;
    if (videosData && videosData.videos) {
      data.videos = videosData.videos;
    }
  } catch (error) {
    console.warn("Failed to load videos:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
  console.log(`  - Works: ${data.works.length}`);
  console.log(`  - Videos: ${data.videos.length}`);
}

generateContent().catch(console.error);

