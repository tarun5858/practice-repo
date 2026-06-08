// Modern approach using ES6 Default Parameters
function UserAvatar({ src = "https://placehold.co/100", size = 50 }) {
  return (
    <img 
      src={src} 
      alt="User profile" 
      style={{ width: size, height: size, borderRadius: '50%' }} 
    />
  );
}

export default UserAvatar;
// How it acts:
// <UserAvatar /> -> Uses placeholder image and size 50
// <UserAvatar size={100} /> -> Uses placeholder image and size 100