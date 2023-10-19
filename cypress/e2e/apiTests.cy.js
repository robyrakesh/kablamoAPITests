/// <reference types="cypress" />

import Requests from "../support/requests"
import { conversion } from "../fixtures/testData"

describe('Verify Valet API - Bank of Canada', () => {
    var duration = 10
    var qp = `recent_weeks=${duration}`

    it('Average Forex Conversion Rate - CAD to AUD', async() => {
        // Send API call 
        const res = await Requests.getConversionRate(conversion.CADtoAUD.series, qp)
        // Verify the response status and body
        const responseText = res.body.seriesDetail.FXCADAUD.description
        expect(res.status).to.be.eq(200)
        expect(res.body).to.have.property('observations').to.be.an('array')
        expect(responseText).to.be.eq(conversion.CADtoAUD.conversionText)
        //Get the average conversion rate
        cy.log(Requests.getAverage(res.body.observations.map(rate => rate.FXCADAUD.v)))
    })

    it('Average Forex Conversion Rate - USD to CAD', async() => {
        // Send API call
        const res = await Requests.getConversionRate(conversion.USDtoCAD.series, qp)
        // Verify the response status and body
        const responseText = res.body.seriesDetail.FXUSDCAD.description
        expect(res.status).to.be.eq(20)
        expect(res.body).to.have.property('observations').to.be.an('array')
        expect(responseText).to.be.eq(conversion.USDtoCAD.conversionText)
        //Get the average conversion rate
        cy.log(Requests.getAverage(res.body.observations.map(rate => rate.FXUSDCAD.v)))
    })

    it('Average Forex Conversion Rate - Incorrect conversion code', async() => {
        // Send API call
        const res = await Requests.getConversionRate(conversion.USDtoAUD.series, qp)
        // Verify the response status and body
        expect(res.status).to.be.eq(404)
        expect(res.body.message).to.be.eq(
            `Series ${conversion.USDtoAUD.series} not found.`
        )
    })

    it('Average Forex Conversion Rate - Bad Request - Incorrect query params', async() => {
        qp = `recent_week=${duration}`
        // Send API call
        const res = await Requests.getConversionRate(conversion.USDtoAUD.series, qp)
        // Verify the response status and body
        expect(res.status).to.be.eq(400)
        expect(res.body.message).to.be.contain(
            `The following query parameters are invalid`
        )
    })

    
  })
  