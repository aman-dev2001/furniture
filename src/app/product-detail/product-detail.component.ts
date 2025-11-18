import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  product: any = null;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://furniture-api.fly.dev/v1/products/${id}`)
      .subscribe((res: any) => {
        this.product = res.data; 
        this.loading = false;
      });
  }
}
