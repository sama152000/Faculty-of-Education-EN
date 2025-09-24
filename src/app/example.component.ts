import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-example',
  imports: [CommonModule, ButtonModule, CardModule, InputTextModule],
  template: `
    <div class="container mt-5">
      <h1 class="text-primary">Bootstrap + PrimeNG Example</h1>

      <!-- Bootstrap Card -->
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Bootstrap Card</h5>
          <p class="card-text">This is a Bootstrap card component.</p>
          <button class="btn btn-primary">Bootstrap Button</button>
        </div>
      </div>

      <!-- PrimeNG Card -->
      <p-card header="PrimeNG Card" class="mb-4">
        <p>This is a PrimeNG card component.</p>
        <ng-template pTemplate="footer">
          <p-button label="PrimeNG Button" icon="pi pi-check"></p-button>
        </ng-template>
      </p-card>

      <!-- Bootstrap Form with PrimeNG Input -->
      <form class="mb-4">
        <div class="mb-3">
          <label for="exampleInput" class="form-label">Email address</label>
          <input pInputText id="exampleInput" type="email" class="form-control" placeholder="Enter email">
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
    }
  `]
})
export class ExampleComponent {}
