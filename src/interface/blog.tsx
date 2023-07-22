export interface BlogType {
  key: string;
  name: string;
  coverImage: string;
  authorImage: string;
  new: boolean;
  description: string;
  category: string;
  author: string;
  datePublished: string;
}

export type BlogState = BlogType[];
