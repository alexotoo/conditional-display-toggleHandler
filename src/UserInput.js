import React from "react";

export default function UserInput(props) {
  const { manpltStateHandler, username } = props;
  const style1 = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid gray",
    padding: "5px"
  };
  return (
    <div>
      <input
        style={style1}
        onChange={manpltStateHandler}
        type="text"
        value={username}
      />
    </div>
  );
}
