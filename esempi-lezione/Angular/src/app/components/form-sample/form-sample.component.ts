import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss']
})
export class FormSampleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  createPizza(pizzaForm: NgForm) {
    this.httpClient.post(`http://localhost:5000/pizzas/`, pizzaForm.value).subscribe({
      next: () => console.log('pizza created'),
      error: () => console.log('error')
    });
  }
}
