import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent implements OnInit {
  @Input() label = ''; // skill label
  @Input() xp = 1; // skill min 1 max 4
  @Input() imgName = ''; // skill image name
  @Input() imgPath = 'assets/img/'; // image path
  @Input() srcUrl = ''; // skill source url

  constructor() { }

  ngOnInit() {
    this.imgPath = this.imgPath + this.imgName;
  }
}
