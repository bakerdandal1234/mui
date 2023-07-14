import { Box, InputAdornment, TextField, Button, styled } from '@mui/material';
import './Create.css'
import { purple } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[700],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
const Create = () => {
  return (
    <Box component="form" sx={{border:"2px solid gray",p:"20px",width:"360px"}}>
       <TextField fullWidth={true} //dedault value true i can add only fullWidth
          label="transaction title"
          sx={{ mt:"30px", display:"block",mb:"30px", }}
          InputProps={{
            startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
          }}
          variant="filled"
        />
         
<TextField fullWidth={true} //dedault value true i can add only fullWidth
          label="transaction title"
          sx={{ mt:"30px", display:"block",mb:"30px" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        {/* <Button variant="contained" color="primary">
          submit
        </Button> */}
        <ColorButton endIcon={<ArrowForwardIosIcon/>} sx={{mr:"auto",ml:"auto",display:"flex"}} variant="contained">submit</ColorButton>

    </Box>

    
  );
}

export default Create;
