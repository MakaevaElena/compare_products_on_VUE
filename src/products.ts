import { numberFormat } from './utils'

export const PRODUCTS = [
  {
    productName: 'Apple iPhone 12',
    productImage: './img/iphone.png',
    producer: 'Apple',
    year: 2021,
    diagonal: 6.1,
    country: 'Китай',
    memory: `128 Гб`,
    fqc: '60 Гц',
    NFC: false,
    ESIM: true,
    wirelessPower: true,
    price: `${numberFormat(81990)} ₽`
  },
  {
    productName: 'Xiaomi Mi 11 Lite',
    productImage: './img/xiaomi.png',
    producer: 'Xiaomi',
    year: 2021,
    diagonal: 6.55,
    country: 'Китай',
    memory: `128 Гб`,
    fqc: '90 Гц',
    NFC: true,
    ESIM: true,
    wirelessPower: false,
    price: `${numberFormat(27490)} ₽`
  },

  {
    productName: 'Samsung Galaxy A72',
    productImage: './img/sumsung.png',
    producer: 'Samsung',
    year: 2021,
    diagonal: 6.7,
    country: 'Вьетнам',
    memory: `128 Гб`,
    fqc: '90 Гц',
    NFC: true,
    ESIM: false,
    wirelessPower: true,
    price: `${numberFormat(32890)} ₽`
  },

  {
    productName: 'Samsung Galaxy S21',
    productImage: './img/sumsung.png',
    producer: 'Samsung',
    year: 2020,
    diagonal: 6.1,
    country: 'Китай',
    memory: `128 Гб`,
    fqc: '120 Гц',
    NFC: false,
    ESIM: true,
    wirelessPower: true,
    price: `${numberFormat(81990)} ₽`
  },
  {
    productName: 'Apple iPhone Xr',
    productImage: './img/iphone.png',
    producer: 'Apple',
    year: 2021,
    diagonal: 6.2,
    country: 'Китай',
    memory: `64 Гб`,
    fqc: '120 Гц',
    NFC: true,
    ESIM: false,
    wirelessPower: false,
    price: `${numberFormat(40690)} ₽`
  },

  {
    productName: 'Realme 8 Pro',
    productImage: './img/sumsung.png',
    producer: 'REALME',
    year: 2022,
    diagonal: 6.7,
    country: 'Китай',
    memory: `128 Гб`,
    fqc: '60 Гц',
    NFC: true,
    ESIM: false,
    wirelessPower: true,
    price: `${numberFormat(32890)} ₽`
  }
]
