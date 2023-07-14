
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { teal } from "@mui/material/colors";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>



      <Route index element={< Home />} /> {/*index la2n hayda lal saf7a ra2isiye */}
      <Route path="create" element={<Create />} />
      {/* ... etc. */}
    </Route>
  )
);


const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary:{main:teal[500],light[]}
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
  )
}

export default App
