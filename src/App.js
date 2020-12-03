import React, { useState } from "react";
import "./App.css";

import DB from "./db.json";

function App() {
  const [data, setData] = useState({
    resultUser: [],
    active: false,
  });

  const filterUserRole = (val) => {
    const value = val.target.value;
    const fetch = DB.data.filter((v) => v.id === Number(value));
    const u = fetch.map((v) => v.user);
    setData((prevState) => ({
      ...prevState,
      resultUser: u,
    }));
  };

  const renderResult = data.resultUser.map((v) =>
    v.map((ve) => {
      return <p>{ve.name}</p>;
    })
  );

  return (
    <div>
      <p>User Roles</p>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <text>Role1</text>
        <input
          name="isGoing"
          type="checkbox"
          placeholder="role1"
          value="1"
          onClick={(e) => filterUserRole(e)}
        />
        <text>Role2</text>
        <input
          name="isGoing"
          type="checkbox"
          placeholder="role2"
          value="2"
          onClick={(e) => filterUserRole(e)}
        />
        <text>Role3</text>
        <input
          name="isGoing"
          type="checkbox"
          placeholder="role3"
          value="3"
          onClick={(e) => filterUserRole(e)}
        />
        <text>Role4</text>
        <input
          name="isGoing"
          type="checkbox"
          placeholder="role1"
          value="4"
          onClick={(e) => filterUserRole(e)}
        />
        <text>Role5</text>
        <input
          name="isGoing"
          type="checkbox"
          placeholder="role1"
          value="5"
          onClick={(e) => filterUserRole(e)}
        />

        <div>
          <hr />
          {renderResult}
        </div>
      </div>
    </div>
  );
}

export default App;
