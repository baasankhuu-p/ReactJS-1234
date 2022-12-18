import React, { Component } from "react";
import Css from "./style.module.css";
class Toolbar extends Component {
    render() {
        return (
            <header className={Css.ToolBar}>
                <div>....</div>
                <div>Logo</div>
                <nav>Цэс</nav>
            </header>
        )
    }
}
export default Toolbar;