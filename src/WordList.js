import React from "react";
import {
  createWord,
  loadWordFB,
  deleteWord,
  deleteWordFB,
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

export default function OutlinedCard() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const my_lists = useSelector((state) => state.word.list);
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <MyBox sx={{ flexGrow: 1 }} m={5}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 6, md: 4 }}
      >
        {my_lists.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MyCard variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {/* Word of the Day */}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {list.word}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {list.desc}
                  </Typography>
                  <Typography variant="body2" style={{ color: "blue" }}>
                    {list.example}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      navigate(`./update/${list.id}`);
                    }}
                  >
                    수정
                  </Button>
                  <Button
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
}

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
  padding: "0 30px",
  margin: "10px",
});
