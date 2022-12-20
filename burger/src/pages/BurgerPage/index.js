import React, { Component } from "react";
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Css from "./style.module.css";
const INCREDIENTS_PRICE = { salad: 200, bacon: 500, meat: 800, cheese: 150 }
const INCREDIENTS_NAMES = {
    bacon: 'Гахайн мах',
    cheese: 'Бяслаг',
    meat: 'Үхрийн мах',
    salad: 'салад'
}
class BurgerPage extends Component {
    state = {
        incredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 2000,
        purchasing: false
    }
    ortsNemeh = (type) => {
        let newIncredients = { ...this.state.incredients }
        newIncredients[type]++;
        let newPrice = this.state.totalPrice + INCREDIENTS_PRICE[type];
        this.setState({
            purchasing: true,
            totalPrice: newPrice,
            incredients: newIncredients
        });
    }
    ortsHasah = (type) => {
        let newIncredients = { ...this.state.incredients }
        newIncredients[type]--;
        let newPrice = this.state.totalPrice - INCREDIENTS_PRICE[type];
        this.setState({
            purchasing: newPrice > 2000,
            totalPrice: newPrice,
            incredients: newIncredients
        });
    }
    controls = {
        bacon: 'Гахайн мах',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах',
        salad: 'салад'
    }
    render() {
        const disabledIncredient = { ...this.state.incredients };
        for (let key in disabledIncredient) {
            disabledIncredient[key] = disabledIncredient[key] <= 0;
        }
        return (
            <div>
                <Modal>
                    <OrderSummary
                        incredientsNames={INCREDIENTS_NAMES}
                        incredients={this.state.incredients} />
                </Modal>
                <Burger
                    incredients={this.state.incredients} />
                <BuildControls
                    incredientsNames={INCREDIENTS_NAMES}
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice}
                    disabledIncredient={disabledIncredient}
                    ortsNemeh={this.ortsNemeh}
                    ortsHasah={this.ortsHasah} />
            </div>
        )
    }
}

export default BurgerPage