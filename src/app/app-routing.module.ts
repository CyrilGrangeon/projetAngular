import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentaireListeComponent } from './commentaire-liste/commentaire-liste.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'films', component: FilmsComponent},
    {path: 'commentaires', component: CommentairesComponent},
    {path:'all-comments' ,component: CommentaireListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
