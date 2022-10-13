import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { People } from "../../data";
import { addPeople } from "../../redux/states";
import { PeopleTable } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;

function addFavorites(): any {
  throw new Error("Function not implemented.");
}
