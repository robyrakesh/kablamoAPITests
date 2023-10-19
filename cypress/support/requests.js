/// <reference types="cypress" />

import moment from "moment/moment"

export default class Requests {

    static getConversionRate(currency, queryParams) {
        return cy.request({
            method: 'GET',
            url: `/observations/${currency}/json?${queryParams}`, 
            failOnStatusCode: false,
        }).then((res) => res)
    }

    static getAverage(rates) {
        var total = 0
        var count = 0
        rates.forEach((rate) => {
            total = total + parseInt(rate)
            count ++
        })
        return ((total/count).toFixed(4))
    }

}