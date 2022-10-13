import { configureStore } from "@reduxjs/toolkit";
import { Person } from "../models/people";
import { favoritesSlice } from "./states/favorites";
import { peopleSlice } from "./states/people";
export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
