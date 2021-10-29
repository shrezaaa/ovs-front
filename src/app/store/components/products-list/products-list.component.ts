import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  form = this.fb.group({
    title: '',
    sort: null,
    BRAND: 'IGNORE',
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  dataSource: Array<product> = [
    {
      imageFile: {
        originalSizeUrl:
          'data:image/jpeg;base64,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',
      },
      title: 'Iphone 13 Pro',
      desc: 'Apple Inc new Phone',
      price: '12000',
      brand: 'Apple',
    },
    {
      imageFile: {
        originalSizeUrl:
          'data:image/jpeg;base64,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',
      },
      title: 'Iphone 13',
      desc: 'Apple Inc new Phone',
      price: '1000',
      brand: 'Apple',
    },
    {
      imageFile: {
        originalSizeUrl:
          'data:image/jpeg;base64,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',
      },
      title: 'Iphone x',
      desc: 'Apple Inc new Phone',
      price: '1000',
      brand: 'Apple',
    },
  ];
}

export interface product {
  imageFile: {
    originalSizeUrl;
  };
  title;
  brand;
  desc;
  price;
  count?;
  color?;
  isActive?;
}
