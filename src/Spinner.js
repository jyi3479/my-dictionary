import React from "react";
import styled from "styled-components";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Spinner = (props) => {
  return (
    <Outer>
      <Title> 단어장 </Title>
      <Button>
        <AddCircleIcon style={{ fontSize: "50px", color: "#6a5acd" }} />
      </Button>
    </Outer>
  );
};

const Title = styled.h1`
  text-align: center;
  color: #6a5acd;
  margin: 30px;
`;

const Outer = styled.div`
  background: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  /* align-items: center; // 세로로 센터 */
  justify-content: center; // 가로로 센터
`;

const Button = styled.div`
  margin: 5px;
  display: flex;
  cursor: pointer;

  position: fixed;
  bottom: 15px;
  right: 15px;
`;

export default Spinner;
