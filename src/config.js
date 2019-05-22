'use strict'

require('dotenv').config()

const env = process.env.test

module.exports = {
    correiosUrl: 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl',
    viaCepUrl: 'http://viacep.com.br/ws/{CEP}/json',
    defaultData:{

        calcArgs: {
            nCdEmpresa: '',
            sDsSenha: '',
            sCdMaoPropria: 'N',
            nVlValorDeclarado: 0,
            sCdAvisoRecebimento: 'N'
        },
        cepArgs : {
            cepEntrada: '',
            metodo: 'buscarCep'
        }

    },
    env: env,
}
