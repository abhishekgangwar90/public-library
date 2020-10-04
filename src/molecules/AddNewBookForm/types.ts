export type State = {
  isLoading: boolean;
  data?: any;
  error?: string;
};

type AddNewBookModal = {
  id?: number;
  name?: string;
  author?: string;
  count?: string;
  description?: string;
};

export type Action =
  | { type: 'saveRequest' }
  | { type: 'saveSuccess' }
  | { type: 'saveFailure'; payload: { error: string } }
  | { type: 'fieldUpdate'; payload: { updatedState: AddNewBookModal } };
