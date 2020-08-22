import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paths } from './app-paths';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { PathResolveService } from './services/path-resolve.service';
import { config } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home,
  },
  {
    path: paths.home,
    component: HomeComponent,
  },
  // {
  //   path: paths.about,
  //   component: AboutComponent,
  // },
  // {
  //   path: 'home',
  //   component: ContactComponent,
  // },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    component: NotfoundComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotfoundComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
    // imports: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
