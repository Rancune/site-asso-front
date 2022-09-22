export interface Article {
  id: number;
  title: string;
  content: string;
  date: Date;
  imgURL: string;
}

export interface RawArticle {
  id: number;
  userId: number;
  title: string;
  body: string;
}
