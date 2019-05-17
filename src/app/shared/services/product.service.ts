import { Product } from 'shared/models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  
  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products')
              .snapshotChanges()
                  .pipe( 
                    map(changes => {
                        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                      })
                  );
  }

  getProduct(id){
    return <Observable<Product>>(this.db.object('/products/'+ id).valueChanges());
  }

  updateProduct(id, product){
    return this.db.object('/products/'+id).update(product);
  }

  deleteProduct(id){
    return this.db.object('/products/'+id).remove()
  }
}

