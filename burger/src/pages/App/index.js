import React, { Component } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";

class App extends Component {
  state = {
    showSideBar: false
  }

  toggleSideBar = () => {
    this.setState(prevSt => {
      return { showSideBar: !prevSt.showSideBar }
    });
  }
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.state.toggleSideBar} />
        <main className={css.Content}>
          <BurgerPage />
        </main>
      </div>
    )
  }
}

export default App;
