import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'tab6', loadChildren: './pages/tab6/tab6.module#Tab6PageModule' },
  { path: 'tab7', loadChildren: './pages/tab7/tab7.module#Tab7PageModule' },
  { path: 'tab8', loadChildren: './pages/tab8/tab8.module#Tab8PageModule' },
  { path: 'tab9', loadChildren: './pages/tab9/tab9.module#Tab9PageModule' },
  { path: 'tab10', loadChildren: './pages/tab10/tab10.module#Tab10PageModule' },
  { path: 'tab11', loadChildren: './pages/tab11/tab11.module#Tab11PageModule' },
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
