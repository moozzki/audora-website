export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Post {
  _id: string;
  _createdAt?: string;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  publishedAt?: string;
  mainImage?: SanityImage;
  categories?: string[];
  authorName?: string;
  authorImage?: SanityImage;
  body?: {
    _type?: string;
    children?: { _type?: string; text?: string; [key: string]: unknown }[];
    [key: string]: unknown;
  }[];
}
export interface StaticPage {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
}
