
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()

export class ProductService{

    private _productUrl='app/products/products.json';

    constructor(private _http:Http){
    }


getproduct():Observable<IProduct[]>{
return this._http.get(this._productUrl).map((response:Response)=><IProduct[]>response.json())
.do(data=>console.log('Product list : '+JSON.stringify(data)))
.catch(this.handleError)
}

private handleError(error:Response){
console.error(error);
return Observable.throw(error.json().error||'server error');
}

}