import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: localStorage.getItem(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;