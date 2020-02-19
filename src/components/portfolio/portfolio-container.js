import React, { Component } from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() {
        super();
    }

    portfolioItems() {
        const data = ["Intermountain Health Care", "Hand and Ortho", "J.D. Music"];

        return data.map(item => {
            return <PortfolioItem />
        })
    }
    render() {
        return(
            <div>
                {this.portfolioItems()}
            </div>
        )
    }
}