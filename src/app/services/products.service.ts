import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    // Get all products from the backend
    public async getAllProducts(): Promise<ProductModel[]> {

        // Create observable which can request data from backend
        const observable = this.http.get<ProductModel[]>(environment.productsUrl);

        // Convert observable to promise and request the data:
        const products = await firstValueFrom(observable);

        // Return Products
        return products;
    }


    // Get One products from the backend
    public async getOneProduct(id: number): Promise<ProductModel> {

        // Create observable which can request data from backend
        const observable = this.http.get<ProductModel>(environment.productsUrl + id);

        // Convert observable to promise and request the data:
        const product = await firstValueFrom(observable);

        // Return Products
        return product;
    }

    // add product to backend
    public async addProduct(product: ProductModel): Promise<void> {

        // Convert ProductModel into FormData:
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);


        // Create observable which can send date to the backend
        const observable = this.http.post<ProductModel>(environment.productsUrl, formData);

        // Convert observable to promise and request the data:
        const addedProduct = await firstValueFrom(observable);

        //When using redux, send addedProduct to global state...
    }

     // delete One products from the backend
     public async deleteProduct(id: number): Promise<void> {

        // Create observable which can delete data from backend
        const observable = this.http.delete(environment.productsUrl + id);


        // Convert 
        await firstValueFrom(observable);

    }



}
