
const Config = require('../config.js');

describe('config file test',() => {
    it('shoud have variables',() => {
        expect(Config.correiosUrl).toBeTruthy()
        expect(Config.viaCepUrl).toBeTruthy()
        expect(Config.defaultData.calcArgs).toBeTruthy()
        expect(Config.defaultData.cepArgs).toBeTruthy()
    
    })


    it('shoud get env vars',() => {
        expect(Config.env).toBe('test_mock')
    })

})


