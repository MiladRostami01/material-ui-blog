


import { Home, NoPhotography, Person, PlayCircleOutline, TabletMac, List, Bookmark, Storefront, StorefrontOutlined, Settings, ExitToApp } from "@mui/icons-material";
import { Container, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((Theme) => ({
  rightbar: {
    position: "sticky",
    top: 0,
    paddingTop: Theme.spacing(10),
    height: "100vh",
    border: "1px solid #f8f8f8",
    [Theme.breakpoints.down('sm')]: {
      backgroundColor: Theme.palette.primary.main,  
    }
  },
  item: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginBottom: Theme.spacing(4),
    [Theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    }
  },
  text: {
    [Theme.breakpoints.down('sm')]: {
      display: "none",
    }
  },
  icon: {
    marginLeft: Theme.spacing(1)
  }
}));

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.rightbar}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>دوستان</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>لیست ها</Typography>
      </div>
      <div className={classes.item}>
        <NoPhotography className={classes.icon} />
        <Typography className={classes.text}>دوربین</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>ویدیو</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>آپ</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>مجموعه ها </Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>بازار</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>تنظیمات</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>خروج</Typography>
      </div>
    </Container>
  );
}

export default Rightbar;
