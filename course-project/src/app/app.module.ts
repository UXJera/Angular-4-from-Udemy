import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // At the point of time when the Module is launced, all of these other Modules are built.
    BrowserModule, // Contains CommonModule + more. Only use this module in app.module, and CommonModule for additional modules
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    //RecipesModule, // We are "Lazy Loading" this in app-routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
