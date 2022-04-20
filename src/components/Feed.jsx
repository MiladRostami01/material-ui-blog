import { makeStyles } from "@mui/styles";
import { Container, Theme } from "@mui/material";
import Post from "./Post";

const useStyle = makeStyles((Theme) => ({
  feed: {
    paddingTop: Theme.spacing(10),
  },
}));

function Feed({ data }) {
  const classes = useStyle();
  return (
    <Container className={classes.feed}>
      {data.map((post, index) => (
        <Post key={index} postData={post} />
      ))}
    </Container>
  );
}

export default Feed;
