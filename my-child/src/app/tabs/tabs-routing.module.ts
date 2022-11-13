import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Location',
        loadChildren: () => import('../Location/Location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'Phone',
        loadChildren: () => import('../phone/Phone.module').then(m => m.PhonePageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/Location',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
