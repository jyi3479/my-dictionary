import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createWord, addWordFB, loadWordFB } from "./redux/modules/word";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const NewWord = (props) => {
  let navigate = useNavigate();
  const inputRef = React.useRef([]);
  // useHistory 사용하는 것과 비슷하죠? :)
  const dispatch = useDispatch();

  //   console.log(inputRef.current[0].value);

  const addWordList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // 여긴 이제 주석처리!
    // setList([...list, text.current.value]);
    // let new_dic = {
    //   word: inputRef.current[0].value,
    //   desc: inputRef.current[1].value,
    //   example: inputRef.current[2].value,
    // };

    const new_dic = {
      word: inputRef.current[0].value,
      desc: inputRef.current[1].value,
      example: inputRef.current[2].value,
      completed: false,
    };
    console.log(new_dic);
    // dispatch(createWord(new_dic));
    dispatch(addWordFB(new_dic));
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#287a9f",
      },
    },
  });

  return (
    <Outer>
      <Title>단어 수정하기</Title>

      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <label>
          단어
          <Input //input으로 하면 defaultValue 해결된다.
            ref={(el) => (inputRef.current[0] = el)}
          />
        </label>

        <label>
          설명
          <Input ref={(el) => (inputRef.current[1] = el)} />
        </label>

        <label>
          예문
          <Input ref={(el) => (inputRef.current[2] = el)} />
        </label>

        <ButtonBox>
          <Button
            onClick={() => {
              addWordList();
              navigate("/");
            }}
          >
            저장하기
          </Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            돌아가기
          </Button>
        </ButtonBox>
      </div>
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    font-weight: 600;
    color: #6a5acd;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: grey;
  margin: 50px;
`;

const ButtonBox = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d2d2ff;
  margin: 10px 15px;
  padding: 7px 0;
  width: 300px;
  transition: border-color 300ms ease-in-out;
  &:focus {
    border-color: #6a5acd;
    outline: none;
  }
`;

const Button = styled.div`
  cursor: pointer;
  /* width: 70px; */
  min-width: 60px;
  margin: 30px 20px;
  padding: 5px 30px;
  background-color: #6a5acd;
  color: white;
  text-align: center;
`;

export default NewWord;
