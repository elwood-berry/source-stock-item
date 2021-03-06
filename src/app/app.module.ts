/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';
// import { MatNativeDateModule } from '@angular/material/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// CORE:MATERIAL
import { CoreSelectComponent } from './components/material/core-select/core-select.component';
import { CoreToolbarComponent } from './components/material/core-toolbar/core-toolbar.component';

// CUSTOM: COMPONENTS
import { OrderFormGridComponent } from './components/order-form-grid/order-form-grid.component';
import { TabsWarehousesComponent } from './components/tabs-warehouses/tabs-warehouses.component';
import { TabsSuppliersComponent } from './components/tabs-suppliers/tabs-suppliers.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    CoreSelectComponent,
    CoreToolbarComponent,
    OrderFormGridComponent,
    TabsWarehousesComponent,
    TabsSuppliersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
