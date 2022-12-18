import React from "react";
import Css from "./style.module.css";

const BurgerIngredient = (props) => {
    switch (props.type) {
        case 'bread-top':
            return (
                <div className={Css.BreadTop}>
                    <div className={`${Css.Seed}`}></div>
                    <div className={`${Css.Seed} ${Css.Second}`}></div >
                    <div className={`${Css.Seed} ${Css.Third}`}></div >
                    <div className={`${Css.Seed} ${Css.Fourth}`}></div >
                </div >
            )
        case 'salad':
            return (<div className={Css.Salad}></div>)
        case 'bacon':
            return (<div className={Css.Bacon}></div>)
        case 'cheese':
            return (<div className={Css.Cheese}></div>)
        case 'meat':
            return (<div className={Css.Meat}></div>)
        case 'bread-bottom':
            return (<div className={Css.BreadBottom}></div>)
    }
};
export default BurgerIngredient