import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/product.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{

    public product: ProductModel;

    public constructor(private productsService: ProductsService,
        private activatedRoute: ActivatedRoute
        ) {}

    public async ngOnInit() {
        try{
            const id = +this.activatedRoute.snapshot.paramMap.get("id");
            this.product = await this.productsService.getOneProduct(id);

        }
        catch(err:any){
            alert(err.message);
        }
        
    }

}
