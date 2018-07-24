import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//Componentes                       
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductComponent } from '../components/product/product.component';

// Rutas                             
const routes: Routes = [
  // { path: '', redirectTo: 'product', pathMatch: 'full' },
  // { path: 'product-list', component: ProductListComponent },
  // { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}
