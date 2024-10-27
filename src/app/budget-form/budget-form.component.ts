import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent {
  /* ADDITIONAL DOCS:
    - https://angular.dev/guide/forms/typed-forms#formarray-dynamic-homogenous-collections
    - https://dev.to/chintanonweb/angular-reactive-forms-mastering-dynamic-form-validation-and-user-interaction-32pe
  */

    presupuestoForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.presupuestoForm = this.fb.group({
        nombre: ['', Validators.required],
        fecha: ['', Validators.required],
        modulos: this.fb.array([])  // FormArray para los módulos
      });
    }
  
    // Getter para acceder al FormArray de módulos
    get modulos() {
      return this.presupuestoForm.get('modulos') as FormArray;
    }
  
    // Método para crear un nuevo FormGroup para un módulo
    createModulo(): FormGroup {
      return this.fb.group({
        tipoModulo: ['', Validators.required],
        ambiente: ['', Validators.required],
        precio: ['', [Validators.required, Validators.min(0)]],
        lugar: ['', Validators.required]
      });
    }
  
    // Método para agregar un nuevo módulo al array
    addModulo() {
      this.modulos.push(this.createModulo());
    }
  
    // Método para eliminar un módulo
    removeModulo(index: number) {
      this.modulos.removeAt(index);
    }
  
    // Método para manejar el envío del formulario
    onSubmit() {
      console.log(this.presupuestoForm.value);
      if (this.presupuestoForm.valid) {
        // Realizar la acción de enviar el presupuesto
      }
    }

    
}
