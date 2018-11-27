import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: InicioComponent
            },
            {
                path: 'formulario-basico',
                component: FormularioBasicoComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {

}