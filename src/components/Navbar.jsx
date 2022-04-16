import { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Theme,
  alpha,
  Badge,
  Avatar,
} from "@mui/material";
import { Mail, Notifications, Search, Close } from "@mui/icons-material";

const useStyle = makeStyles((Theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [Theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [Theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    alignItems: "center",
    color: "#fff",
    backgroundColor: alpha(Theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(Theme.palette.common.white, 0.25),
    },
    borderRadius: Theme.shape.borderRadius,
    width: "60%",
    display: (props) => (props.isOpen ? "flex" : "none"),
    [Theme.breakpoints.up("md")]: {
      display: "flex !important",
    },
  },
  close: {
    display: "block",
    [Theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
  input: {
    marginRight: Theme.spacing(1),
    color: "#fff !important",
    width: "100%",
  },
  icons: {
    display: (props) => (props.isOpen ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginLeft: Theme.spacing(2),
  },
  searchButton: {
    color: "#fff",
    marginLeft: Theme.spacing(2),
    display: "block",
    [Theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
}));

function Navbar({ search, searchHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyle({ isOpen });
  return (
    <Box>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Typography
            sx={{
              color: "#fff",
            }}
            variant="h6"
            className={classes.logoLg}
          >
            وبلاگ میلاد
          </Typography>
          <Typography
            sx={{
              color: "#fff",
            }}
            variant="h6"
            className={classes.logoSm}
          >
            وبلاگ
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase
              placeholder="جستجو کنید..."
              className={classes.input}
              defaultValue={search}
              onChange={(e) => searchHandler(e)}
            />
            <Close
              className={classes.close}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => {
                setIsOpen(true);
              }}
            />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <Mail color="action" />
            </Badge>
            <Badge badgeContent={3} color="secondary" className={classes.badge}>
              <Notifications color="action" />
            </Badge>
            <Avatar
              alt="milad rostami"
              src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
