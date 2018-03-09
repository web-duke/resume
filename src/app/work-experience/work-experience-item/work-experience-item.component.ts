import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.scss']
})
export class WorkExperienceItemComponent implements OnInit {
  @Input() title = ''; // job title
  @Input() company = ''; // company name
  @Input() dates = ''; // dates of work

  constructor() { }

  ngOnInit() {
  }

}
