import { Action, State } from './types';

export const initialState = {
  isLoading: false,
  data: {
    name: '',
    author: '',
    count: '',
    description: '',
  },
  error: '',
};

function useAddNewBookReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case 'saveRequest':
      return { ...state, isLoading: true };
    case 'saveSuccess':
      return {
        ...state,
        isLoading: false,
      };
    case 'saveFailure':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case 'fieldUpdate':
      return {
        ...state,
        error: '',
        data: action.payload.updatedState,
      };

    default:
      return state;
  }
}

export default useAddNewBookReducer;
