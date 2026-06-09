const DifferentRender = ({isLoggedIn, username,unreadMessagesCount,isAvailable,isAdmin}) => {
  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <h1>Welcome Back, {username}!</h1>
        <p>Yeh aapka personal prospect dashboard hai.</p>
        <a href="#messages" style={{ position: 'relative' }}>
        Messages
        {/* Agar unread messages hain, toh badge dikhao, nahi toh gayab kar do */}
        {unreadMessagesCount > 0 && (
          <span className="badge" style={{ background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
            {unreadMessagesCount}
          </span>
        )}
      </a>
      <div>
      Status: {isAvailable ? <span style={{ color: 'green' }}>Available</span> : <span style={{ color: 'red' }}>Sold Out</span>}
      {/* The Logical AND Operator (condition && jsx) */}
      {isAdmin && <button style={{ backgroundColor: 'red' }}>Delete User</button>}
    </div>
      </div>
    );
  } else {
    return (
      <div className="login-prompt">
        <h1>Please Sign In</h1>
        <p>Is page ko dekhne ke liye login karna zaroori hai.</p>
        <button>Log In Here</button>
        
      </div>
    );
  }
};
export default DifferentRender;
