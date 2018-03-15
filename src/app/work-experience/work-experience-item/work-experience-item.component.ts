import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.scss']
})
export class WorkExperienceItemComponent implements OnInit {
  @Input() title = ''; // job title
  @Input() company = ''; // company name
  @Input() imgName = ''; // company logo
  @Input() imgPath = 'assets/img/'; // image path
  @Input() srcUrl = '#'; // company source url
  @Input() dates = ''; // dates of work

  constructor() { }

  ngOnInit() {
    this.imgPath = this.imgPath + this.imgName;
  }

}
