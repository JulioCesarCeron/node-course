const assert = require('assert')
const PasswordHelper = require('../helpers/passwordHelper')

const SENHA = 'jorge@123321'
const HASH = '$2b$04$bKpK6STufWkWw1CWp3ROM.ATtjKt.NnIF5eRD30u/YPWQmPJygj4q'

describe('UserHelper test suite', function() {
    it('Deve gerar um Hash a partir de uma senha', async() => {
        const result = await PasswordHelper.hashPassword(SENHA)

        assert.ok(result.length > 10)
    })

    it('deve comparar uma senha e seu hash ', async () => {
        const result = await PasswordHelper.comparePassword(SENHA, HASH)
        assert.ok(result)
    })
})