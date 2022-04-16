import { makeStyles } from "@mui/styles";
import {
  Card,
  Theme,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const useStyle = makeStyles((Theme) => ({
  card: {
    marginBottom: Theme.spacing(4)
    
  },
  img: {
    width: "100%",
    height: 250, 
    [Theme.breakpoints.down('sm')]: {
      height: 150,
    }
  }
}));

function Feed({postData}) {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.img}
        image={postData.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">اشتراک گذاری</Button>
        <Button size="small">بیشتر...</Button>
      </CardActions>
    </Card>
  );
}

export default Feed;
