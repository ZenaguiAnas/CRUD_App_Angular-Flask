
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { ShowCarComponent } from './show-car/show-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-cars', pathMatch: 'full' },
  { path: 'list-cars', component: ListCarsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: 'delete-car/:id', component: DeleteCarComponent },
  { path: 'show-car/:id', component: ShowCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

