import { Outlet } from "react-router-dom";
// import { Divider, Drawer, Toolbar } from "@mui/material";
import AppBarr from "../comp/AppBar";
import Drawerr from "../comp/Drawerr";
import { Box } from "@mui/material";
const DrawerWidth = "240";
const Root = () => {
  return (
    <div>
      <AppBarr DrawerWidth={DrawerWidth} />
      <Drawerr DrawerWidth={DrawerWidth} />
      <Box
      component="main"
        sx={{
          ml: `${DrawerWidth}px`,
          display:"flex",
          justifyContent:"center",
          mt:"30px",
          // border:"2px solid red"
        }}
        className="border"
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
