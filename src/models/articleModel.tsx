export interface ArticleFinal {
  id: number;
  title: string;
  body: string;
  date: Date;
  imgURL: string;
}

export interface RawArticle {
  data: Article;
}

//Interface Générique
export interface LaravelResponse<T> {
  data: T[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
}

export interface Article {
  id: number;
  title: string;
  body: string;
  type: string;
}
