import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="/" style={{ color: "white" }}>
            React Movie App
          </a>
          <div className="buttons">
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
