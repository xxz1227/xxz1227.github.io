import type { Diary, Work, Video } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  diaries: Diary[];
  works: Work[];
  videos: Video[];
}

const content = contentData as ContentData;

export const diaries: Diary[] = content.diaries;
export const works: Work[] = content.works;
export const videos: Video[] = content.videos;

