import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Pronunciation } from '../../pronunciation.model';

@Component({
  selector: 'app-pronunciation-item',
  templateUrl: './pronunciation-item.component.html',
  styleUrls: ['./pronunciation-item.component.css']
})
export class PronunciationItemComponent implements OnInit {
  @Input() pronunciation: Pronunciation;
  @Output() wordSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.wordSelected.emit();
  }

}
