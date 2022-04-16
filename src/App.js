import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { useEffect, useState } from "react";

const useStyle = makeStyles((Theme) => ({
  rightbar: {
    [Theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const [mainData, setMainData] = useState([
    {
      title: "پست اول",
      imageUrl:
        "https://images.pexels.com/photos/1588134/pexels-photo-1588134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد ",
      textType: "friends",
      commentType: "nobody",
    },
    {
      title: "پست دوم",
      imageUrl:
        "https://images.pexels.com/photos/831077/pexels-photo-831077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد ",
      textType: "public",
      commentType: "everybody",
    },
    {
      title: "پست سوم",
      imageUrl:
        "https://images.pexels.com/photos/586688/pexels-photo-586688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد ",
      textType: "private",
      commentType: "friends",
    },
  ]);
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState(mainData);

  useEffect(() => {
    const strgData = JSON.parse(localStorage.getItem("BlogPosts"));

    if (strgData) {
      setMainData(strgData);
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
    setfilterData( data)
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
