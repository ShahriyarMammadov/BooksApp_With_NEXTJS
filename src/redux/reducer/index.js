import { combineReducers } from "redux";
import { booksReducer } from "./getBooksReducer";

export const rootReducer = combineReducers({
  booksReducer,
});
