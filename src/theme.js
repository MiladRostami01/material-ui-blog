import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const Theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: orange[400],
    }
  },
  myButton: {
    color: "red !important",
    backgroundColor: "blue !important",
  }
})

export default Theme