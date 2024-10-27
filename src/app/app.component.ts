import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetFormComponent } from "./budget-form/budget-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BudgetFormComponent, BudgetFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'electric-design-challange';
}
