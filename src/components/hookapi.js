import React, { useEffect, useState } from "react";

function HookApi() { 
  const [basketball, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4", {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json", 
                "X-Forwarded-For": "103.104.101.41",                
                },
                method: "GET"
            })
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {basketball && basketball.length > 0 && basketball.map((userObj, index) => (
            <li key={userObj.id}>{userObj.id}</li>
          ))}
      </ul>
    </main>
  );
}

export default HookApi;

 //fetch("https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4")