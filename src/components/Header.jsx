import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header({setFilter}) {

    

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const [click,setClick] = useState(false)
    return (
        <header className="header">

            {click && <input type="text" placeholder="Search" onChange={handleFilterChange} />}
            <h1>Coffee</h1>
            <IoSearchSharp onClick={()=>setClick(!click)} className="right" color="white" size={32} />           
        </header>
    )
}