import { Component, OnInit, EventEmitter, Output } from '@angular/core';

//test
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { LocalizeRouterService } from 'localize-router';
//test

import { Pronunciation } from '../pronunciation.model';

@Component({
  selector: 'app-pronunciation-list',
  templateUrl: './pronunciation-list.component.html',
  styleUrls: ['./pronunciation-list.component.css']
})
export class PronunciationListComponent implements OnInit {
  @Output() wordWasSelected = new EventEmitter<Pronunciation>();
  words: Pronunciation[] = [
    new Pronunciation('Apple', '/ˈæp(ə)l/', 'The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/ue4xfbPNigY'),
    new Pronunciation('Banana', 'This is simply a test', '' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/-ocYrqMe1ag'),
    new Pronunciation('Carrot', '/ˈkerət/', '' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/KmrsMw42oOc'),
    new Pronunciation('Pear', 'This is simply a test', '' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/cITkZpNDCeA'),
    new Pronunciation('Peach', 'This is simply a test', '' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/NweGPQpfGS0'),
    new Pronunciation('Orange', 'This is simply a test', '' ,'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 'https://www.youtube.com/embed/w6qkWrBOvhI')
  ];
  userFilter: any = { name: '' };

  constructor() { }

//test
  // name: Observable<string>;
  // constructor(private route: ActivatedRoute, private localize: LocalizeRouterService, private router: Router) {
  //   this.name = route.params.map((p: any) => p.id);
  // }
//end test

  ngOnInit() {
  }

  onPronunciationSelected(pronunciation: Pronunciation) {
   this.wordWasSelected.emit(pronunciation);
  }

}