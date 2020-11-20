import "./App.css";
import SidebarComponent from "./containers/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SidebarComponent />
        <Chat />
      </div>
    </div>
  );
}

export default App;
