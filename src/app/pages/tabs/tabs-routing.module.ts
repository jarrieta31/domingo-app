import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home-menu/home-menu.module").then(
            (m) => m.HomeMenuPageModule
          ),
      },
      {
        path: "place",
        loadChildren: () =>
          import("../place/place.module").then((m) => m.PlacePageModule),
      },
      {
        path: "events",
        loadChildren: () =>
          import("../events/events.module").then((m) => m.EventsPageModule),
      },
      {
        path: "sleep",
        loadChildren: () =>
          import("../where-sleep/where-sleep.module").then(
            (m) => m.WhereSleepPageModule
          ),
      },
      {
        path: "eat",
        loadChildren: () =>
          import("../where-eat/where-eat.module").then(
            (m) => m.WhereEatPageModule
          ),
      },
      {
        path: "info",
        loadChildren: () =>
          import("../information/information.module").then(
            (m) => m.InformationPageModule
          ),
      },
      {
        path: "artist",
        loadChildren: () =>
          import("../artist/artist.module").then(
            (m) => m.ArtistPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
