import { Link,Typography,Avatar,Toolbar, AppBar } from "@mui/material";


// eslint-disable-next-line react/prop-types
const AppBarr = ({DrawerWidth}) => {
  return (
    <AppBar sx={{marginLeft:`${DrawerWidth}px`, width: `calc(100% - ${DrawerWidth}px)`}} position="static">
    <Toolbar >
      <Link className="link" sx={{textDecoration:"none",flexGrow: 1 ,color:"inherit"}}   href="/"> expensive</Link>
      <Typography sx={{fontSize:"20px","&:hover":{fontSize:"22px"},marginRight:"20px"}}>Login</Typography>
      <Avatar sx={{}} alt="Remy Sharp" src="./images/baker dandal.jpg" />
    </Toolbar>
  </AppBar>  
  );
}

export default AppBarr;
