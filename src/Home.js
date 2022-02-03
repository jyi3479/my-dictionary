import React from "react";
import WordList from "./WordList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import { styled } from "@mui/styles";

// import { Box, Fab } from "@material-ui/core";
// import { positions } from "@mui/system";
// import { AddIcon } from "@mui/icons-material";

const Home = (props) => {
  let navigate = useNavigate();
  // window.addEventListener("scroll", () => console.log("🌀"));
  return (
    <div>
      <Title> 단어장 </Title>
      <WordList />
      {/* <Button
        onClick={() => {
          navigate(`./add`);
        }}
      >
        {" "}
        </Button> */}
      <Button>
        <AddCircleIcon
          onClick={() => {
            navigate(`./add`);
          }}
          style={{ fontSize: "50px", color: "#6a5acd" }}
        />
      </Button>
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  color: #6a5acd;
  margin: 30px;
`;

const Button = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 15px;

  transition: transform 300ms ease-in-out linear; //linear : 스무스하게 돌아감

  &:hover {
    transform: rotate(90deg);
  }
`;

export default Home;
