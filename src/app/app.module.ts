import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule } from '@nebular/auth';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { VentasListaComponent } from './ventas-lista/ventas-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasListaComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbAuthModule,    
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
