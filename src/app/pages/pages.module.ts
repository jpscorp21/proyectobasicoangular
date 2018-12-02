import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { ComprasListaComponent } from './compras/compras-lista/compras-lista.component';
import { VentasListaComponent } from './ventas/ventas-lista/ventas-lista.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { LocalidadListaComponent } from './localidad/localidad-lista/localidad-lista.component';
import { VentasFormComponent } from './ventas/ventas-form/ventas-form.component';
import { ComprasFormComponent } from './compras/compras-form/compras-form.component';

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbLayoutModule, NbThemeModule],
  declarations: [
    InicioComponent,
    PagesComponent,
    FormularioBasicoComponent,
    ClientesListaComponent,
    ProductosListaComponent,
    ComprasListaComponent,
    VentasListaComponent,
    AcercadeComponent,
    ProductosFormComponent,
    ClientesFormComponent,
    LocalidadListaComponent,
    VentasFormComponent,
    ComprasFormComponent
  ]
})
export class PagesModule {}
