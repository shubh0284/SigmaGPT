import "./App.css";
import Sidebar from "./sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import MyContext from "./MyContext.jsx";

function App() {
  const providerValues = {}; //value pass
  return (
    <div className="app">
      <MyContext.Provider values={providerValues}>
        <Sidebar />
        <ChatWindow />
      </MyContext.Provider>
    </div>
  );
}

export default App;
