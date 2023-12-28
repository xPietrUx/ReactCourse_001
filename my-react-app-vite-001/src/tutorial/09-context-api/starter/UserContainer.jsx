const UserContainer = ({user, logout}) => {
  return (
    <div className="user-container">
        {user.name ? (
        <>
            <p>
                Hello There, {user?.name?.toUpperCase()}
            </p>
            <button className="btn" onClick={logout}>
                Logout
            </button>
        </>
        ) : (
        <p>
            Please Login
        </p>
        )}
    </div>
  )
}
export default UserContainer