import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'films', component: FilmsComponent},
    {path: 'commentaires', component: CommentairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
