import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { ComprasListaComponent } from './compras/compras-lista/compras-lista.component';
import { VentasListaComponent } from './ventas/ventas-lista/ventas-lista.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { AcercadeComponent } from './acercade/acercade.component';

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
            {
                path: 'compras',
                component: ComprasListaComponent
            },
            {
                path: 'ventas',
                component: VentasListaComponent
            },
            {
                path: 'clientes',
                component: ClientesListaComponent
            },
            {
                path: 'productos',
                component: ProductosListaComponent
            },
            {
                path: 'acercade',
                component: AcercadeComponent
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