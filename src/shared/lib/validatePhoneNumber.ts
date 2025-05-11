import { parsePhoneNumber } from "libphonenumber-js"
import { checkPhoneNumber } from "./checkPhoneNumber"

export function validatePhoneNumber(value: string) {
    try {
      const phoneNumber = parsePhoneNumber(value, 'TJ')
      if (!(phoneNumber.country === 'TJ' && checkPhoneNumber(value))) {
        return 'Неверный формат номера телефона'
      }
      if (!value.startsWith('+992')) {
        return 'Номер телефона должен начинаться с +992'
      }
      return true
    } catch (e) {
      return true
    }
  }