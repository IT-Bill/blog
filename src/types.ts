export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
  cover?: string | ImageMetadata;
  tags?: string[];
  views: number;
  comments: number;
  content?: string;
}

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif';
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  isAdmin?: boolean;
}

export interface Category {
  name: string;
  count: number;
}
