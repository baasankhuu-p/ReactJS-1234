import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import Css from "./style.module.css";

const Burger = (props) => {
    let content = [];
    let items = Object.entries(props.incredients);
    items.map((el, index) => {
        for (let i = 0; i < el[1]; i++) {
            content.push(<BurgerIngredient key={`${i + 1}${index + 1}`} type={el[0]} />);
        }
    }
    )
    if (content.length === 0)
        content = <p>Хачиртай талхны орцыг сонгоно уу...</p>
    return (
        <div className={Css.Burger}>
            <BurgerIngredient type="bread-top" />
            {content}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default Burger