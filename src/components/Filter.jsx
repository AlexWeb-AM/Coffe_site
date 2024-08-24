import { useState } from "react";

export default function Filter({ setFilter }) {
  const [clickedButtons, setClickedButtons] = useState('All');
  const handleClick = ( filterText) => {
    
    setFilter(filterText); 
  };  

  return (
    <div className='filter_menu'>
      <button
        className={`button_filter ${clickedButtons === "All" ? "clicked" : ""}`}
        onClick={() => {
          setClickedButtons("All");
          handleClick('')
        }}
      >
        All
      </button>
      <button
         className={`button_filter ${clickedButtons === "Mjölk" ? "clicked" : ""}`}
         onClick={() => {
           setClickedButtons("Mjölk");
           handleClick('mjölk')
         }}
      >
        Mjölk
      </button>
      <button
         className={`button_filter ${clickedButtons === "Latte" ? "clicked" : ""}`}
        onClick={() => {
          setClickedButtons("Latte");
          handleClick('latte')
        }}
      >
        Latte
      </button>
      <button
        className={`button_filter ${clickedButtons === "Svart" ? "clicked" : ""}`}
        onClick={() => {
          setClickedButtons("Svart");
          handleClick('svart')
        }}
      >
        Svart
      </button>
    </div>
  );
}
