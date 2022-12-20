import React from "react";
import BuildControl from "../BuildControl";
import Css from "./style.module.css"
const BuildControls = (props) => {

    return (
        <div className={Css.BuildControls}>
            <p>Нийт үнэ: <strong>{props.price}</strong></p>
            {
                Object.keys(props.incredientsNames).map((el) => (
                    <BuildControl
                        key={el}
                        disable={props.disabledIncredient}
                        ortsNemeh={props.ortsNemeh}
                        ortsHasah={props.ortsHasah}
                        type={el}
                        text={props.incredientsNames[el]} />
                ))
            }
            <button disabled={props.disabled} className={Css.OrderButton}>ЗАХИАЛАХ</button>
        </div>
    );
}

export default BuildControls