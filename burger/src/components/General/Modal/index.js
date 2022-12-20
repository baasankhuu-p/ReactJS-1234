import React from "react";
import Css from "./style.module.css";
const Modal = (props) => {
    return <div className={Css.Modal}>{props.children}</div>
}

export default Modal;