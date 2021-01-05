import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PilotDetailsComponent } from './components/pilot-details/pilot-details.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'starships', pathMatch: 'full' },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starships/:id', component: StarshipDetailsComponent },
  { path: 'people/:id', component: PilotDetailsComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
