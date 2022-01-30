import React from "react";
import {
  createWord,
  loadWordFB,
  deleteWord,
  deleteWordFB,
  completeWord,
  completeWordFB,
} from "./redux/modules/word";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { styled } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Update from "./Update";
import { WindowSharp } from "@mui/icons-material";
import "./App.css";

const WordList = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const my_lists = useSelector((state) => state.word.list);
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <MyBox className="WordList" sx={{ flexGrow: 1 }} m={5}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 6, md: 4 }}
      >
        {my_lists.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MyCard
              variant="outlined"
              style={{
                borderColor: "#6a5acd",
                backgroundColor: list.completed ? "#d2d2ff" : "none",
                color: list.completed ? "white" : "black",
              }}
            >
              <React.Fragment>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {/* Word of the Day */}
                  </Typography>
                  <Typography
                    variant="body"
                    component="div"
                    style={{ fontSize: "25px" }}
                  >
                    {list.word}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    style={{ fontSize: "20px" }}
                  >
                    {list.desc}
                  </Typography>
                  <br />
                  <Typography variant="body" style={{ color: "blue" }}>
                    {list.example}
                  </Typography>
                </CardContent>
                <CardActions
                // style={{
                //   position: "relative",
                //   bottom: "120px",
                //   left: "140px",
                //   display: "flex",
                //   -webkit-box-align: "center",
                //   alignItems: "center",
                // }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      dispatch(completeWordFB(list.id, list.completed));
                    }}
                  >
                    완료
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      navigate(`./update/${list.id}`);
                    }}
                    style={{
                      color: "white",
                      backgroundColor: "#6a5acd",
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      dispatch(deleteWordFB(list.id));
                    }}
                  >
                    삭제
                  </Button>
                </CardActions>
              </React.Fragment>
            </MyCard>
          </Grid>
        ))}
      </Grid>
    </MyBox>
  );
};

// const ButtonBox = styled.div`
//   float: right;
//   margin: 10px 20px 0px 0px;
//   font-size: 15px;
//   font-weight: bold;
//   text-align: center;
//   color: white;
// `;

const MyBox = styled(Box)({
  // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  // border: 0,
  // borderRadius: 3,
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  // color: "white",
  // height: 48,
  // padding: "0 30px",
});

const MyCard = styled(Card)({
  // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  // border: 0,
  // borderRadius: 3,
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  // height: 48,
  padding: "10px 20px",
  margin: "10px",
});

export default WordList;
