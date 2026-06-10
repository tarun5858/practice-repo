
function UserProfile ({name, role, isOnline,handleAddToCart}){
  
  return(
    <div className="user-card">
    <h1>Name: {name}</h1>
    <p>Role: {role}</p>
    <p>Status:{isOnline ? "Online" : "Offline"} </p>
    </div>
  )
}
export default UserProfile;