export interface BlogType {
  key: string;
  name: string;
  image: string;
  new: boolean;
  description: string;
  category: string;
  author: string;
}

export type BlogState = BlogType[];
