import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './comp.css',
  styleUrls: ['./comp.css']
})
export class TestComponent {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: 'title',
      description: 'desscription'
    };
    let result = this.testService.sampleFunction(data)
  }

//   newTutorial(): void {
//     this.submitted = false;
//     this.tutorial = {
//       title: '',
//       description: '',
//       published: false
//     };
//   }

}
