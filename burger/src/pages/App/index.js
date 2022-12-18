import Toolbar from "../../components/ToolBar"
import BurgerBuilder from "../BurgerBuilder"
import Css from "./style.module.css"
function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className={Css.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
