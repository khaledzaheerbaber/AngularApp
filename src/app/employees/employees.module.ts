import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'delete', component: DeleteComponent }
];

@NgModule({
  declarations: [
    EmployeesComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
