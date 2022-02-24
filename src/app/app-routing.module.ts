import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-menu', pathMatch: 'full' }, 
  {
    path: 'home-menu', 
    loadChildren: () => import('./pages/home-menu/home-menu.module').then( m => m.HomeMenuPageModule)
  },
  {
    path: 'artist',
    loadChildren: () => import('./pages/artist/artist.module').then( m => m.ArtistPageModule)
  },
  {
    path: 'event-detail',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./pages/place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'place-selected',
    loadChildren: () => import('./pages/place-selected/place-selected.module').then( m => m.PlaceSelectedPageModule)
  },
  {
    path: 'selling-points',
    loadChildren: () => import('./pages/selling-points/selling-points.module').then( m => m.SellingPointsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'where-eat',
    loadChildren: () => import('./pages/where-eat/where-eat.module').then( m => m.WhereEatPageModule)
  },
  {
    path: 'where-sleep',
    loadChildren: () => import('./pages/where-sleep/where-sleep.module').then( m => m.WhereSleepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
