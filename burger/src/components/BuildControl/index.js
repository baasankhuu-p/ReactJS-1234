import React from "react";
import Css from "./style.module.css"
const BuildControl = (props) => {

    return (
        <div className={Css.BuildControl} >
            <div className={Css.Label}>{props.text}</div>
            <button
                disabled={props.disable[props.type]}
                className={Css.Less}
                onClick={() => props.ortsHasah(props.type)}>
                Хасах
            </button>
            <button
                className={Css.More}
                onClick={() => props.ortsNemeh(props.type)}>
                Нэмэх
            </button>
        </div>
    )
}

export default BuildControl