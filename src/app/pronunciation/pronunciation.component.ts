import { Component, OnInit } from '@angular/core';

import { Pronunciation } from './pronunciation.model';

@Component({
  selector: 'app-pronunciation',
  templateUrl: './pronunciation.component.html',
  styleUrls: ['./pronunciation.component.css']
})
export class PronunciationComponent implements OnInit {
  selectedPronunciation: Pronunciation;

  constructor() { }

  ngOnInit() {
  }

}
