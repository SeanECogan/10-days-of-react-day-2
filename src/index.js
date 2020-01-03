import React from "react";
import ReactDOM from "react-dom";

import ScotchInfoBar from "./ScotchInfoBar";
import UserDetails from "./UserDetails";

import users from "./users-data";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      <div className="users">
        {users.map((user, index) => (
          <UserDetails
            key={index}
            name={user.name}
            location={user.location}
            car={user.car}
          />
        ))}
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
