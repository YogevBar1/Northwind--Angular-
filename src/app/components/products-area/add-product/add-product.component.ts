import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from 'src/app/models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    // Must create an object for the two way binding:
    public product = new ProductModel();

    public constructor(
        private productsService: ProductsService,
        private router: Router
        ){}


    public async send(imageBox: HTMLInputElement){
        try{
            this.product.image = imageBox.files[0];
    
            
            
            await this.productsService.addProduct(this.product);
            alert("Product added");
            this.router.navigateByUrl("/products");

        }
        catch(err:any){
            alert(err.message)
        }
        
    }
}
