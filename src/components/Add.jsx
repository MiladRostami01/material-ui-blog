import React, { useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import {
  Theme,
  Tooltip,
  Button,
  Modal,
  Container,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Stack,
  MenuItem,
  Dialog,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyle = makeStyles((Theme) => ({
  add: {
    position: "fixed !important",
    bottom: 10,
    right: "2%",
  },
  addIcon: {
    borderRadius: "50% !important",
    minWidth: "0px !important",
    width: "45px !important",
    height: "45px !important",
  },
  container: {
    width: "500px !important",
    height: "85vh !important",
    position: "absolute",
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    padding: Theme.spacing(3),
    borderRadius: "10px",
    overflow: "auto",
    [Theme.breakpoints.down("sm")]: {
      width: "100vw !important",
      height: "100vh !important",
      overflow: "auto",
    },
  },
  radioBtn: {
    width: "50%",
  },
  label: {},
}));

function Add({ onAddPost }) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyle();

  // const [formData, setFormData] = useState({});

  const title = useRef();
  const imgUrl = useRef();
  const message = useRef();
  const textType = useRef();
  const commentType = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    //finding how can leave comment :
    const myNode = [...commentType.current.children];
    let howCanLeaveComment = myNode.filter((radio) => {
      return radio.control.checked;
    });
    howCanLeaveComment = howCanLeaveComment[0].control.value;

    //create data
    const postData = {
      title: title.current.children[0].children[0].value,
      imageUrl: imgUrl.current.children[0].children[0].value,
      message: message.current.children[0].children[0].value,
      textType: textType.current.children[1].children[1].value,
      commentType: howCanLeaveComment,
    };

    onAddPost(postData);

    setOpenAlert(true);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip
        title="افزودن پست"
        arrow
        className={classes.add}
        onClick={() => setOpen(true)}
      >
        <Button variant="contained" className={classes.addIcon}>
          <AddIcon />
        </Button>
      </Tooltip>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.container}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div>
              <TextField
                ref={title}
                name="title"
                required
                id="filled-required"
                placeholder="عنوان"
                variant="filled"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <TextField
                ref={imgUrl}
                name="imgUrl"
                required
                id="filled-required"
                placeholder="آدرس تصویر (URL)"
                variant="filled"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
            </div>
            <TextField
              ref={message}
              name="message"
              id="filled-multiline-flexible"
              placeholder="متن شما"
              multiline
              rows={4}
              variant="filled"
              style={{
                width: "100%",
                marginBottom: "20px",
                textAlign: "right",
              }}
            />
            <TextField
              ref={textType}
              name="textType"
              id="filled-select-currency"
              select
              label="نوع پیام"
              variant="filled"
              style={{
                width: "100%",
                marginBottom: "40px",
              }}
            >
              <MenuItem value="public">عمومی</MenuItem>
              <MenuItem value="private">خصوصی</MenuItem>
              <MenuItem value="friends">دوستان</MenuItem>
            </TextField>

            <FormControl
              style={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                کسانی که می توانند برا شما کامنت بگذارند:
              </FormLabel>
              <RadioGroup
                ref={commentType}
                name="commentType"
                aria-labelledby="demo-radio-buttons-group-label"
              >
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small" />}
                  label="همه"
                  className={classes.radioBtn}
                />
                <FormControlLabel
                  value="friend"
                  control={<Radio size="small" />}
                  label="دوستان"
                  className={classes.radioBtn}
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="هیچکس"
                  className={classes.radioBtn}
                />
                <FormControlLabel
                  value="vip"
                  disabled
                  control={<Radio size="small" />}
                  label="افراد ویژه"
                  className={classes.radioBtn}
                />
              </RadioGroup>
            </FormControl>

            <Stack direction="row">
              <Button
                type="submit"
                variant="outlined"
                color="success"
                style={{ marginLeft: "10px" }}
              >
                پست
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="error"
                onClick={() => {
                  setOpen(false);
                }}
              >
                انصراف
              </Button>
            </Stack>
          </form>

          <Snackbar
            open={openAlert}
            autoHideDuration={1000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              پست با موفقیت ارسال شد
            </Alert>
          </Snackbar>
        </Container>
      </Modal>
    </>
  );
}

export default Add;
