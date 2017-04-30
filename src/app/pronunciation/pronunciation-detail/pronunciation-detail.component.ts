import { Component, OnInit, Input } from '@angular/core';

//test
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { LocalizeRouterService } from 'localize-router';
//end test

import { Pronunciation } from '../pronunciation.model';

@Component({
  selector: 'app-pronunciation-detail',
  templateUrl: './pronunciation-detail.component.html',
  styleUrls: ['./pronunciation-detail.component.css']
})
export class PronunciationDetailComponent implements OnInit {
    @Input() pronunciation: Pronunciation;

//test
  // name: Observable<string>;
  // constructor(private route: ActivatedRoute, private localize: LocalizeRouterService, private router: Router) {
  //   this.name = route.params.map((p: any) => p.id);
  // }
//end test

  ngOnInit() {
  }


}
