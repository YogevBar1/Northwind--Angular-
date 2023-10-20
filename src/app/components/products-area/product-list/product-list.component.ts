import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, RouterLink],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers:[ProductsService] //component scope service
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];


    // DI: Dependency Injection
    public constructor(
        private title: Title,
        private productService: ProductsService) { }

    public async ngOnInit() {   //useEffect(()=>{},[])
        try {
            this.title.setTitle("NorthWind | Products");
            this.products = await this.productService.getAllProducts();
        }
        catch (err: any) {
            alert(err.message)

        }

    }

    // formatPrice(price: any): string {
    //     const numericPrice = Number(price); // Cast to number
    //     if (!isNaN(numericPrice)) {
    //         return "$ " + numericPrice.toFixed(2);
    //     } else {
    //         return "Invalid Price"; // Handle invalid input
    //     }
    // }

    public async deleteProduct(productId: number) {
        try {
            const confirmation = confirm("Are you sure you want to delete this product?");
            if (confirmation) {
                await this.productService.deleteProduct(productId);
                this.products = this.products.filter(p => p.id !== productId);
                alert("Product deleted");
            }
        } catch (err: any) {
            alert(err.message);
        }
    }
    

}
