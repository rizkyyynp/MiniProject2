import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const token = localStorage.getItem("access_token");
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("access_token");

        setTimeout(() => {
            navigate("/login");
        }, 1000);
    }

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <nav className="fixed top-0 bottom-0 bg-primary w-16 h-full overflow-hidden transition duration-200 ease-linear shadow-bS1 hover:w-60 hover:transition-all hover:duration-500 hover:ease-in-out">
            <ul>
                <li>
                    <Link to="/" className="relative text-secondary text-sm flex w-75 py-5 items-center hover:bg-third">
                        <i data-feather="home" className="icon w-15 h-15 text-2px text-center"></i>
                        <span className="nav-item ml-5">Home</span>
                    </Link>
                </li>
                <li>
                    {token ? (
                        <button onClick={handleLogOut} className="logout absolute flex bottom-0 text-secondary text-sm w-75 py-5 hover:bg-third">
                            <i data-feather="log-out" className="icon w-15 h-15 text-2px text-center"></i>
                            <span className="nav-item ml-4">Log out</span>
                        </button>
                    ) : (
                        <Link to="/login" className="logout absolute flex bottom-0 text-secondary text-sm w-75 py-5 hover:bg-third">
                            <i data-feather="user" className="icon w-15 h-15 text-2px text-center"></i>
                            <span className="nav-item ml-4">Login</span>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
