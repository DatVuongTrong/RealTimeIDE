import {React, useState} from "react";

import Client from "../component/Client";
import Editor from "../component/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([{socketId: 1, username: 'Dat'}, {socketId: 2, username: 'Dat'}, {socketId: 2, username: 'Dat'}]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/depauw_logo.png" alt="depauw_logo"></img>   
          </div>
          <h3>Connected</h3>
          <div className="clientsList"> 
            {
              clients.map((client) => (
                <Client key={client.socketId} username={client.username} />
              ))
            }

            </div>
        </div>
        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>


      </div>
      <div className="editorWrap">
      <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
