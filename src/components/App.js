import React, { useCallback, useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const getData = useCallback(() => {
     fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => setData(d.data));
  }, []);
  useEffect(getData,[])
  console.log(data);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Blue Whales</h1>
        <button style={{ margin: "auto 0 auto 0" }} className="btn">
          Get User List
        </button>
      </div>
      <table style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>{data?.map((ele)=>{
          return (
            <tr key={ele.email}>
              <td>{ele.first_name}</td>
              <td>{ele.last_name}</td>
              <td>{ele.email}</td>
              <td><img src={ele.avatar} alt="AVARAT" style={{width:"2rem",height:"2rem"}} /></td>
            </tr>
          );
        })}</tbody>
      </table>
    </div>
  );
};

export default App;
