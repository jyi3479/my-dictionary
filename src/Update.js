import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createWord, updateWordFB, loadWordFB } from "./redux/modules/word";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const Update = (props) => {
  const { my_id } = useParams();
  let navigate = useNavigate();
  const inputRef = React.useRef([]);
  const dispatch = useDispatch();

  const my_lists = useSelector((state) => state.word.list).filter(
    (l) => l.id === my_id
  )[0];
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);
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
    };
    console.log(new_dic);
    // dispatch(createWord(new_dic));
    dispatch(updateWordFB(my_id, new_dic));
  };

  return (
    <Outer>
      <Input>
        <Title>단어 수정하기</Title>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "500" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="단어"
            variant="standard"
            color="primary"
            inputRef={(el) => (inputRef.current[0] = el)}
            defaultValue={my_lists ? my_lists.word : null}
            fullWidth
            focused
          />
          <TextField
            label="설명"
            variant="standard"
            color="primary"
            inputRef={(el) => (inputRef.current[1] = el)}
            defaultValue={my_lists ? my_lists.desc : null}
            margin="dense"
            fullWidth
            focused
          />
          <TextField
            label="예문"
            variant="standard"
            color="primary"
            inputRef={(el) => (inputRef.current[2] = el)}
            defaultValue={my_lists ? my_lists.example : null}
            margin="dense"
            fullWidth
            focused
          />
        </Box>
        <ButtonBox>
          <Button
            onClick={() => {
              addWordList();
              navigate("/");
            }}
          >
            수정하기
          </Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            돌아가기
          </Button>
        </ButtonBox>
      </Input>
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: grey;
  margin: 50px;
`;

const Input = styled.div`
  max-width: 350px;
  margin: 20px auto;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  cursor: pointer;
  margin: 40px auto;
  padding: 5px 35px;
  background-color: #6a5acd;
  color: white;
`;

export default Update;
