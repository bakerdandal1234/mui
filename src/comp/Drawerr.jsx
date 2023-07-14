import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Drawerr = ({ DrawerWidth }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: `${DrawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${DrawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>






        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>









        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("profile");
            }}
          >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="profile" />
          </ListItemButton>
        </ListItem>









        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("settings");
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="settings" />
          </ListItemButton>
        </ListItem>







        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("logout");
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
