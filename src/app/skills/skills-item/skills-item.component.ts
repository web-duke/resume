import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent implements OnInit {
  @Input() label = ''; // skill label
  @Input() xp = 0; // skill percentage
  @Input() barPosition = 0; // skill percentage

  constructor() { }

  ngOnInit() {
    this.barPosition = 100 - this.xp;
    console.log(this.barPosition);
  }

}
