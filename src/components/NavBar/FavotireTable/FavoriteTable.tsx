import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "../../../models";
import { removeFavorite } from "../../../redux/states";
import { AppStore } from "../../../redux/store";

interface FavoriteTableInterface {}

const FavoriteTable: React.FunctionComponent<FavoriteTableInterface> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
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
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <DeleteIcon />
            </IconButton>
            // <Checkbox
            //   size="small"
            //   checked={findPerson(params.row)}
            //   onChange={() => handleChange(params.row)}
            // />
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
  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      columns={columns}
      rows={stateFavorites}
      rowsPerPageOptions={[pageSize]}
      pageSize={pageSize}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
