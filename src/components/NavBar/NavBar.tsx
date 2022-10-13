import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from 'react-redux';
import { AppStore } from "../../redux/store";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import FavoriteTable from "./FavotireTable/FavoriteTable";

interface NavbarInterface {}

const NavBar: React.FC<NavbarInterface> = () => {

  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dami
          </Typography>
          <IconButton color="secondary" aria-label="favorites" component="label" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
