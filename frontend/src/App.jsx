import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState("empty");

  const fetchData = async () => {
    try {
      const {data} = await axios.get("/api/");
      setData(data);
    } catch (error) {
      alert("failed to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is the Frontent File {data}</h1>
    </div>
  );
};

export default App;
