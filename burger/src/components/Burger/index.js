import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import Css from "./style.module.css";

const Burger = () => {
    return (
        <div className={Css.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default Burger