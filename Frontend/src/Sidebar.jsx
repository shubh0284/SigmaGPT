import "./Sidebar.css";

function Sidebar() {
  return (
    <section>
      {/* new chat button*/}
      <button>
        <img src="src/assets/blacklogo.png" alt="gpt logo"></img>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      {/*History*/}

      <ul className="history">
        <li>history 1</li>
        <li>history 2</li>
        <li>history 3</li>
      </ul>

      {/* sign */}
      <div className="sign">
        <p>By ShubhamShinare &hearts;</p>
      </div>
    </section>
  );
}

export default Sidebar;
