export interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  category?: string;
  cover?: string;
  tags?: string[];
  content?: string;
}
