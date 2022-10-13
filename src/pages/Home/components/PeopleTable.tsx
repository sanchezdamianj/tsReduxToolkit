import Checkbox from "@mui/material/Checkbox";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "../../../models";
import { addFavorite } from "../../../redux/states";
import { AppStore } from "../../../redux/store";
import { useState, useEffect } from "react";

interface PeopleTableInterface {}

const PeopleTable: React.FunctionComponent<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sorteable: false,
      headerName: "",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  useEffect(() => {
    setSelectedPeople(favoritePeople)
  }, [favoritePeople]);

  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      columns={columns}
      rows={statePeople}
      rowsPerPageOptions={[pageSize]}
      pageSize={pageSize}
      getRowId={(row: any) => row.id}
    />
  );
};

export default PeopleTable;
