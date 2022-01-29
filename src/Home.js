import React from "react";
import WordList from "./WordList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
      <Button
        onClick={() => {
          navigate(`./add`);
        }}
      ></Button>
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  color: #6a5acd;
  margin: 30px;
`;

const Button = styled.div`
  width: 0px;
  height: 0px;
  border-left: 40px solid #6a5acd;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin: 5px;
  display: flex;
  cursor: pointer;

  position: fixed;
  bottom: 15px;
  right: 15px;
`;

export default Home;
