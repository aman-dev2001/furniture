import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = true;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      this.loading = false;
    });
  }
}
