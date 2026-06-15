export function GrandParent() {

const userRole = "Full Stack Developer"; // Yeh data neche bhejna hai
return <Parent role={userRole}/>
}

// Parent ko is 'role' se koi matlab nahi hai, fir bhi ye ise le rha hai sirf niche pass karne ke liye
function Parent({ role }) {
  return <Child role={role} />;
}

// Child ko bhi koi matlab nahi hai
function Child({ role }) {
  return <GrandChild role={role} />;
}

// Asli zaroorat isko thi!
function GrandChild({ role }) {
  return <h3>My Role is: {role}</h3>;
}


// Agar Props Drilling bohot zyada gahri ho jaye (3-4 levels se niche), 
// toh hum isse bachne ke liye Context API ya Redux/Zustand jaise State Management Tools ka use karte hain, 
// jo data ko hawa me (globally) rakh dete hain aur koi bhi component use direct khinch sakta hai.