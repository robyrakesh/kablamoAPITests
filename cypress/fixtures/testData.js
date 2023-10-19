export const conversion = {
    CADtoAUD: {
        series: 'FXCADAUD',
        conversionText: 'Canadian dollar to Australian dollar daily exchange rate'
    },
    USDtoCAD: {
        series: 'FXUSDCAD',
        conversionText: 'US dollar to Canadian dollar daily exchange rate'
    }, 
    USDtoAUD: {
        series: 'FXUSDAUD',
        error: {
            message: "Series FXUSDAUD not found.",
            docs: "https://www.bankofcanada.ca/valet/docs"
        }
    }
}