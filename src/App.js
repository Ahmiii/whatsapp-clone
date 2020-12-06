import "./App.css";
import SidebarComponent from "./containers/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SidebarComponent />

        <Switch>
          <Route path="/room/:roomId" component={Chat} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
