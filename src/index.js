import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//---------------------------------

function formatDate(date) {
  //преобразует даьу изи мили секунд в строку д.м.год
  return date.toLocaleDateString();
}
//извлекаем компоненты из Comment
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />

      <div className="Comment-text"> {props.text} </div>

      <div className="Comment-date"> {formatDate(props.date)} </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div className="UserInfo-name"> {props.user.name} </div>
    </div>
  );
}
//объект нужен для передачи данных в компонент
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
