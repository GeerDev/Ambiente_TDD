export class ShoppingCart {
  constructor() {
    this.items = new Map()
  }

  addItem(product, quantity = 1) {
    const currentQuantity = this.items.get(product.id) || 0
    this.items.set(product.id, currentQuantity + quantity)
  }

  removeItem(productId) {
    this.items.delete(productId)
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeItem(productId)
      return
    }
    this.items.set(productId, quantity)
  }

  getTotal(products) {
    let total = 0
    for (const [productId, quantity] of this.items) {
      const product = products.find(p => p.id === productId)
      if (product) {
        total += product.price * quantity
      }
    }
    return total
  }
}