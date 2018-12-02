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
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { LocalidadListaComponent } from './localidad/localidad-lista/localidad-lista.component';
import { VentasFormComponent } from './ventas/ventas-form/ventas-form.component';
import { ComprasFormComponent } from './compras/compras-form/compras-form.component';

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
                path: 'compras-form',
                component: ComprasFormComponent
            },
            {
                path: 'ventas',
                component: VentasListaComponent
            },
            {
                path: 'ventas-form',
                component: VentasFormComponent
            },
            {
                path: 'clientes',
                component: ClientesListaComponent
            },
            {
                path: 'clientes-form',
                component: ClientesFormComponent
            },
            {
                path: 'productos',
                component: ProductosListaComponent
            },
            {
                path: 'productos-form',
                component: ProductosFormComponent
            },
            {
                path: 'localidad',
                component: LocalidadListaComponent
            },
            {
                path: 'acercade',
                component: AcercadeComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {

}
