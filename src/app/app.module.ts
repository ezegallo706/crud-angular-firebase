import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//Angular Material Modules
import { 
  MatButtonModule, 
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  
} from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import 'hammerjs';

//End Angular Material Modules

//components
import { ProductListComponent } from './components/product-list/product-list.component';

//Services
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
