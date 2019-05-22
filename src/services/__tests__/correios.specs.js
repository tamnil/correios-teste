const Correios = require('../correios')

describe('shoud test correios', () => {

    it('shoud exists',() => {
        expect(Correios).toBeTruthy();
    
    })

    it('shoud test correios connection',() => {
    
        expect(Correios.calcPrazos).toBeTruthy();


    })

})
