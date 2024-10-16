import {formatCentsToCurrency} from '@/utils/currency'

describe('Currency utils', () => {
  describe('formatNumberToCurrency', () => {
    it('should format a float value to BRL currency format', () => {
      const value = 10099
      const sut = formatCentsToCurrency(value)

      // needed to add a blank space using UTF8 char code %C2%A0 because
      // Intl.NumberFormat add this character between the symbol and the number
      expect(sut).toBe(decodeURI('R$%C2%A0100,99'))
    })
  })
})
