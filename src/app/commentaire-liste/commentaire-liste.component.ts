import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';

@Component({
  selector: 'app-commentaire-liste',
  templateUrl: './commentaire-liste.component.html',
  styleUrls: ['./commentaire-liste.component.css']
})
export class CommentaireListeComponent implements OnInit {
  public comment:any;
  public allComments:any[] = [];
  constructor(private cs : CommentaireService) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments(){
    this.allComments = this.cs.getComments();
    console.log("test");
  }
}
