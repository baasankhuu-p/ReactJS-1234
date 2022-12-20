import Toolbar from "../../components/ToolBar"
import BurgerPage from "../BurgerPage"
import Css from "./style.module.css"
function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={Css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
