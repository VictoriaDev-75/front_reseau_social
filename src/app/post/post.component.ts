import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //titrePost: string = 'Titre';
  //contenuPost: string = 'Contenu';
  text: string = '';
  @Input() titrePost: string;
  @Input() contenuPost: string;

  onClique(){
    document.getElementById("nolike").style.display = "block";
    document.getElementById("like").style.display = "none";


  }

  onCliqueNo(){
    document.getElementById("nolike").style.display = "none";
    document.getElementById("like").style.display = "block";


  }



  constructor() { }

  ngOnInit(): void {
  }

  

}
