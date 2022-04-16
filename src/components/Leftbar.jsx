import { makeStyles } from "@mui/styles";
import {
  Container,
  Theme,
  AvatarGroup,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider,
} from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
];

const useStyle = makeStyles((Theme) => ({
  container: {
    paddingTop: Theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  avatarGroup: {
    width: "100%",
    flexDirection: "row !important",
    overflow: "hidden",
  },
  avatar: {
    [Theme.breakpoints.down("md")]: {
      marginLeft: "-20px !important",
    }
  },
  link: {
    marginLeft: "10px !important"
  },
}));

function Leftbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography getterBottom>افراد آنلاین</Typography>
      <AvatarGroup max={4} className={classes.avatarGroup}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
          className={classes.avatar}
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
          className={classes.avatar}
        />
      </AvatarGroup>

      <Typography> گالری</Typography>
      <ImageList sx={{ width: "100%", height: 400 }} cols={3} rowHeight={120}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography>دسته بندی ها </Typography>
      <Link component="button" href="#" variant="body2" underline="hover" className={classes.link}>
        ورزشی
      </Link>
      <Divider />
      <Link component="button" href="#" variant="body2" underline="hover" className={classes.link}>
        سیاسی
      </Link>
      <Divider />
      <Link component="button" href="#" variant="body2" underline="hover" className={classes.link}>
        علمی
      </Link>
      <Divider />
      <Link component="button" href="#" variant="body2" underline="hover" className={classes.link}>
        هنری
      </Link>
    </Container>
  );
}

export default Leftbar;
