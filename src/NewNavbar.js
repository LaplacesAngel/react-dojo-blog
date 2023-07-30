import "./index.css";

const NewNavbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "White",
            backgroundColor: "#805fdc",
            borderRadius: "80px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NewNavbar;
