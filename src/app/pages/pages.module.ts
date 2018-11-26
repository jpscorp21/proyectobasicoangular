import { NgModule } from "@angular/core";
import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [PagesRoutingModule],
    declarations: [InicioComponent, PagesComponent]
})
export class PagesModule {}

