import { createContext, useReducer } from 'react';
import { bookReducer } from './BookReducer';

export const BookContext = createContext();

const initialState = {
  books: [],
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ books: state.books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
