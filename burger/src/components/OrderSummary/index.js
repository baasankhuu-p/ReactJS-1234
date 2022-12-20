import React from "react";
import Css from "./style.module.css";

const OrderSummary = (props) => {
    return (<div className={Css.OrderSummary}>
        <ul>
            {
                Object.keys(props.incredients).map(el => (
                    <li key={el}>{props.incredientsNames[el]} {props.incredients[el]}</li>
                ))
            }
        </ul>
        <p>Цааш үргэлжлүүлэх үү? <button>Тийм</button> <button>үгүй</button></p>
    </div >)
}
export default OrderSummary;