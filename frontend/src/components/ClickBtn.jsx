import React from "react";

const ClickBtn = () =>{
    const handleClick = (e) =>{
         alert("button clicked");
         console.log(e.target)
    }
    return(
        <div>
            <h2>Event Handling in react</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default ClickBtn;