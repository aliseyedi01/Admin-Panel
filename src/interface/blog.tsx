export interface BlogType {
  key: string;
  name: string;
  coverImage: string;
  authorImage: string;
  newPublished: boolean;
  description: string;
  category: string;
  author: string;
  datePublished: string;
}

export type BlogState = BlogType[] | undefined;

export type BlogUpdate = Partial<BlogType>;
