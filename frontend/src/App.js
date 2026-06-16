import UserProfile from "./components/userProfile";
import CustomButton from "./components/customBtn";
import UserAvatar from "./components/userAvatar";
import CardContainer from "./components/cardContainer";
import ClockTimer from "./components/ClockTimer";
import DifferentRender from "./components/differentRender";
// import TechStackList from "./components/techList";
import ProductList from "./components/productsList";
import UserForm from "./components/UserForm";
import ContextApp from "./components/useContext/dashboard";


import { useEffect, useState } from "react";
function App() {

  const [selectedColor, setSelectedColor] = useState("black");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleDateString());

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setCurrentTime(new Date().toLocaleTimeString())
    },1000);

    return () => clearInterval(timerId);
  })

  return (
    <>
    <div className="App">
      <h1>User Profile Page</h1>

       <UserProfile name="Tarun" role="admin" isOnline={true} />
       <UserProfile name="Bob" role="Backend Developer" isOnline={false} />
       <UserProfile name="Charlie" role="Product Manager" isOnline={true} />

      <CustomButton 
      label = "Submit Form"
      type = "submit"
      disabled={false}
      onClick={()=> console.log("clicked")}
      
      />
<br/>
<br/>
      <UserAvatar/>
      <UserAvatar size={100}/>

      <div>
 
 <CardContainer title="my title">
  {/* All of this JSX is bundled into the 'children' prop */}
      <p>Name: Tarun</p>
      <button>View Full Profile</button>
 </CardContainer>
      </div>


      <div>
        <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <label htmlFor="color-picker" style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Choose Timer Color: 
      </label>
      
      <select 
        id="color-picker"
        value={selectedColor}
        onChange={(e)=> setSelectedColor(e.target.value)}
        style={{ padding: '5px', fontSize: '1rem' }}
      >
        <option value="black">Default (Black)</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>

      <hr style={{ margin: '20px 0' }} />

      {/* 4. Passing data down as dynamic props to our hookless component */}
      <ClockTimer timeString={currentTime} textColor={selectedColor} />
    </div>

      </div>

      <div>
        <DifferentRender 
        isLoggedIn={true}
        username="Tarun"
        unreadMessagesCount={1}
        isAvailable={true}
        isAdmin={true}/>
      </div>


      {/* <div>
        <TechStackList/>
      </div> */}


      <div>
        <ProductList/>
      </div>
<br/>
<div>
  <UserForm />
</div>


<br/><br/>
<div>
  <ContextApp />
</div>




      </div>


    </>
  );
}

export default App;
