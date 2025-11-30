import { describe, it, expect, beforeEach } from 'vitest'
import { ShoppingCart } from './src/shoppingCart'

describe('ShoppingCart', () => {
  let cart
  let products

  beforeEach(() => {
    cart = new ShoppingCart()
    products = [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Mouse', price: 25 },
    ]
  })

  it('agrega productos correctamente', () => {
    const laptop = products[0]
    cart.addItem(laptop, 2)
    expect(cart.items.get(laptop.id)).toBe(2)
  })

  it('actualiza la cantidad de productos', () => {
    const mouse = products[1]
    cart.addItem(mouse, 1)
    cart.updateQuantity(mouse.id, 3)
    expect(cart.items.get(mouse.id)).toBe(3)
  })

  it('elimina productos cuando la cantidad es 0', () => {
    const laptop = products[0]
    cart.addItem(laptop, 1)
    cart.updateQuantity(laptop.id, 0)
    expect(cart.items.has(laptop.id)).toBe(false)
  })

  it('calcula el total correctamente', () => {
    cart.addItem(products[0], 2) // 2 * 999 = 1998
    cart.addItem(products[1], 1) // 1 * 25 = 25

    const total = cart.getTotal(products)
    expect(total).toBe(2023)
  })
})