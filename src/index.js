import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// 단어리스트에 리덕스를 주입해줄 프로바이더를 불러온다.
import { Provider } from "react-redux";
// 연결할 스토어 가지고 오기
import store from "./redux/configStore";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
