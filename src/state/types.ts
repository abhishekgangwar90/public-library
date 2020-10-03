export type bookInfo = {
  id: number;
  name: string;
  author: string;
  description: string;
  count: number;
};

export type bookAction = {
  type: string;
  payload?: any;
};

export type bookState = {
  isLoading: boolean;
  error: string;
  books: Array<bookInfo>;
};

export type editActionPayload = {
  id: number;
  name?: string;
  author?: string;
  description?: string;
  count?: number;
};
