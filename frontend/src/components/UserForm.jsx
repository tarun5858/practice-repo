import React, { useState } from "react";
import ClickBtn from "./ClickBtn";

const UserForm = () =>{
    const [name,setName] = useState("");
    const [role,setRole] = useState("");

    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log("Submitting Data to Backend:", { name, role });
    alert(`User Created: ${name} (${role})`);
    };

    return(
        <div>
            <h2>Controlled Form Component</h2>
            <form onSubmit={handleSubmit}>
             <div><label htmlFor="">Name: </label>
             <input 
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Enter name"
              />
             
             </div><br />
             <div>
                <label htmlFor="">Role: </label>
                <input 
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter Role"
                 />
                 <br />
                 <button type="submit">Submit</button>
             </div>
            </form>

{/* Live Preview niche dikhega jaise-jaise aap type karoge */}
      <div style={{ marginTop: '20px', background: '#eee', padding: '10px' }}>
        <h4>Live State Preview:</h4>
        <p>Current Name State: <strong>{name}</strong></p>
        <p>Current Role State: <strong>{role}</strong></p>
      </div>

<ClickBtn></ClickBtn>

        </div>
    )
}
export default UserForm;