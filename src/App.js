import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { useEffect, useState } from "react";

// dummy data
import { data as fileData } from "./data/data";

const useStyle = makeStyles((Theme) => ({
  rightbar: {
    [Theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const [mainData, setMainData] = useState(fileData);
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState(fileData);

  console.log(filterData);

  useEffect(() => {
    const strgData = JSON.parse(localStorage.getItem("BlogPosts"));

    if (strgData) {
      setMainData(strgData);
      setfilterData(strgData);
    }
  }, []);

  const searchHandler = (event) => {
    const filtered = mainData.filter((postData) => {
      if (event.target.value === "") {
        return postData;
      } else if (postData.title.includes(event.target.value)) {
        return postData;
      }
    });
    console.log("filtered", filtered);

    setfilterData(filtered);
  };

  const addPostHanlder = (postData) => {
    let data = [];

    if (mainData) {
      data = [...mainData, postData];
    } else {
      data.push(postData);
    }

    localStorage.setItem("BlogPosts", JSON.stringify(data));
    setMainData(data);
    setfilterData(data);
  };

  const classes = useStyle();
  return (
    <div>
      <Navbar search={search} searchHandler={searchHandler} />

      <Grid container className={classes.gird}>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed data={filterData} />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <Leftbar />
        </Grid>
      </Grid>

      <Add onAddPost={addPostHanlder} />
    </div>
  );
}

export default App;
