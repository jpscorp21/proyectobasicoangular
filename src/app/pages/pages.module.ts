import { NgModule } from "@angular/core";
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbLayoutModule,
        NbThemeModule
    ],
    declarations: [InicioComponent, PagesComponent, FormularioBasicoComponent]
})
export class PagesModule {}

