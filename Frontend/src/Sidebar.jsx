import "./Sidebar.css";

function Sidebar() {
  return (
    <section>
      {/* new chat button*/}
      <button>
        <img
          src="src/assets/blacklogo.png"
          alt="gpt logo"
          className="logo"
        ></img>
        <span>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
      </button>

      {/*History*/}

      <ul className="history">
        <li>Thread 1</li>
        <li>Thread 2</li>
        <li>Thread 3</li>
      </ul>

      {/* sign */}
      <div className="sign">
        <p>By ShubhamShinare &hearts;</p>
      </div>
    </section>
  );
}

export default Sidebar;
