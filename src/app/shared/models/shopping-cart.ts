import { ShoppingCartItem } from './shopping-cart-items';
import { Product } from './product';

export class ShoppingCart {

    items: ShoppingCartItem[] = [];

    constructor(private itemsMap?: { [productID: string]: ShoppingCartItem }) {
        this.itemsMap = this.itemsMap || {};

        for (const productID in itemsMap) {
            const item = itemsMap[productID];
            const x = new ShoppingCartItem();
            Object.assign(x, item);
            x.key = productID;
            this.items.push(x);

            // this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    get productIDs() {
        return Object.keys(this.items);
    }

    getQuantity(product: Product) {
        // console.log("getQuantity()", product);
        const items = this.itemsMap[product.key];
        return items ? items.quantity : 0;
    }

    get totalPrice() {
        let sum = 0;
        for (const productID in this.items) {
            sum += this.items[productID].totalPrice;
            // sum+= i.product.price * i.quantity;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0 ;
        for ( const productID in this.items) {
            count  += this.items[productID].quantity;
        }
        return count;
    }
}
