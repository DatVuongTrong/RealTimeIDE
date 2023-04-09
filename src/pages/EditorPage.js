import React from "react";

const EditorPage = () => {
  return (
    <div className="homePageWrapper">
      <div className="forWrapper">
        <img src="/depauw_logo.png" alt="code-sync-logo"></img>
        <h4 className="main-label">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invitation then create &nbsp;
            <a href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
