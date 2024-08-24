import { useState } from "react";

export default function Filter({ setFilter }) {
  const [clickedButtons, setClickedButtons] = useState([false, false, false, false]);

  const handleClick = (index, filterText) => {
    const newClickedButtons = [false, false, false, false]; 
    newClickedButtons[index] = true;
    setClickedButtons(newClickedButtons);
    setFilter(filterText); 
  };  

  return (
    <div className='filter_menu'>
      <button
        className={`button_filter ${clickedButtons[0] ? 'clicked' : ''}`}
        onClick={() => handleClick(0, "")} 
      >
        All
      </button>
      <button
        className={`button_filter ${clickedButtons[1] ? 'clicked' : ''}`}
        onClick={() => handleClick(1, "Mjölk")}
      >
        Mjölk
      </button>
      <button
        className={`button_filter ${clickedButtons[2] ? 'clicked' : ''}`}
        onClick={() => handleClick(2, "Latte")}
      >
        Latte
      </button>
      <button
        className={`button_filter ${clickedButtons[3] ? 'clicked' : ''}`}
        onClick={() => handleClick(3, "Svart")}
      >
        Svart
      </button>
    </div>
  );
}
