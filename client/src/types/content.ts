export interface Diary {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  content: string;
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  content: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  embedUrl: string;
}

