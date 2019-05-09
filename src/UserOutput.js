import React from "react";
import UserInput from "./UserInput";

export default function UserOutput(props) {
  const { manpltStateHandler, username } = props;
  const style = {
    width: "60%",
    margin: "auto",
    boxShadow: "0 2px 3px #ccc",
    padding: "16px",
    textAlign: "center",
    marginBottom: "5px"
  };
  return (
    <div style={style}>
      <p>Dynamic Username: {username}</p>
      <UserInput manpltStateHandler={manpltStateHandler} username={username} />
      <p>hello inside UserOutput</p>
    </div>
  );
}
