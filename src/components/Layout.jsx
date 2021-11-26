import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/" className = "home">Home</Link>
            <Link to="/profile" className = "profile">Profile</Link>
            <Link to="/friends" className = "friends">Friends</Link>
            <Link to="/login" className = "login">Login</Link>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">
            
        </footer>
        </>
    )
}

export {Layout}
