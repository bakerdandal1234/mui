import { Box, IconButton, Paper, Typography } from "@mui/material";
import "./Home.css";
import ClearIcon from "@mui/icons-material/Clear";

const Home = () => (
  <Box border="2px solid gray" sx={{p:"20px"}}>
    <Paper sx={{ width: "300px", mt: "20px", mb: "20px",display:"flex",justifyContent:"space-between",position:"relative",padding:"20px",backgroundColor:"red" }}>
      
        <Typography  variant="h6">GYM</Typography>
        <Typography sx={{opacity:"0.8"}}  variant="h6">$100</Typography>
        <IconButton sx={{ position: "absolute",top:0, right:"-10px",}}>
          <ClearIcon />
        </IconButton>

    </Paper>


    <Paper sx={{ width: "300px", mt: "20px", mb: "20px",display:"flex",justifyContent:"space-between",position:"relative",padding:"20px",backgroundColor:"red" }}>
      
      <Typography  variant="h6">GYM</Typography>
      <Typography sx={{opacity:"0.8"}}  variant="h6">$100</Typography>
      <IconButton sx={{ position: "absolute",top:0, right:"-10px",}}>
        <ClearIcon />
      </IconButton>

  </Paper>


  <Paper sx={{ width: "300px", mt: "20px", mb: "20px",display:"flex",justifyContent:"space-between",position:"relative",padding:"20px",backgroundColor:"red" }}>
      
      <Typography  variant="h6">GYM</Typography>
      <Typography sx={{opacity:"0.8"}}  variant="h6">$100</Typography>
      <IconButton sx={{ position: "absolute",top:0, right:"-10px",}}>
        <ClearIcon />
      </IconButton>

  </Paper>



  <Paper sx={{ width: "300px", mt: "20px", mb: "20px",display:"flex",justifyContent:"space-between",position:"relative",padding:"20px",backgroundColor:"red" }}>
      
      <Typography  variant="h6">GYM</Typography>
      <Typography sx={{opacity:"0.8"}}  variant="h6">$100</Typography>
      <IconButton sx={{ position: "absolute",top:0, right:"-10px",}}>
        <ClearIcon />
      </IconButton>

  </Paper>
   </Box>
);

export default Home;
