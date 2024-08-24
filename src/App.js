import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Filter from "./components/Filter";
import { MyContext } from "./context";

export default function App() {
  const [data, setData] = useState([]);  
  const [filter, setFilter] = useState(""); 

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://api.sampleapis.com/coffee/hot");
        const json = await resp.json();
        setData(json);  
      } catch (err) {
        console.error(err.message);
      }
    };

    getData();  
  }, []);

  const filteredData = data.filter(item =>
    filter === "" || item.description.toLowerCase().includes(filter.toLowerCase())
  );

  const filter_map = filteredData.map((e) => (
    <Main key={e.title} title={e.title} src={e.image} des={e.description} /> 
  ));

  return (
    <div className="App">
      <MyContext.Provider value={{data:data}}>
        <Header setFilter={setFilter} />  
        <Filter setFilter={setFilter} /> 
        <div className="main">
          {filter_map}
        </div>
      </MyContext.Provider>
    </div>
  );
}
