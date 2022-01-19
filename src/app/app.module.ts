import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { CommentaireListeComponent } from './commentaire-liste/commentaire-liste.component';
import { CommentaireCardComponent } from './commentaire-card/commentaire-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    CommentairesComponent,
    CommentaireListeComponent,
    CommentaireCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
