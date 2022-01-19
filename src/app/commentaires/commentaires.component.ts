import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  public allComments!: any[]
  constructor(private cs:CommentaireService) { }

  ngOnInit(): void {
  }
  addComment(form : any) {
    //console.log(form.value);
    this.cs.createComment(form.value);
  }
}
