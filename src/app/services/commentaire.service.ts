import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  public comments: any[] =[]
  constructor() { }
  createComment(commentaire: any){
    const newComment = {id:Date.now(),...Comment};
    this.comments = [commentaire, ...this.comments];
    console.log(this.comments)
  }
  getComments(){
    return this.comments;
  }
}
