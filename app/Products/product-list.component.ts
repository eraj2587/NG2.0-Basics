
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    filterBy: string = ''
    products: IProduct[];

    ngOnInit(): void {
        this._productService.getproduct()
                        .subscribe(products=>this.products=products,
                        err=>console.log(err));
    }
    toggleImages(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product list : ' + message;
    }

    constructor(private _productService:ProductService){
        
    }

}