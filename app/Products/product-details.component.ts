
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
templateUrl:'product-details.component.html',
moduleId: module.id,
})

export class ProductDetailComponent implements OnInit {
    ngOnInit(): void {
        let Id=+this._route.snapshot.params['id'];
        this.pageTitle+=`:${Id}`;
    }
    constructor(private _route: ActivatedRoute) {
    }

    pageTitle:string="Product Details";
    Product:IProduct;
}