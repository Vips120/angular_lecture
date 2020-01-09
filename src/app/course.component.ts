import { Component } from '@angular/core';
import { CourseData} from './courseData';
@Component({
    selector: "app-course",
    template: `
       <h2>{{username}}</h2>
       <hr/>
       <ul *ngFor="let course of courses">
       <li>{{course}}</li>
       </ul>
    `,
    styles: [``]
})

export class CourseComponent {
    public username: string = "Vipul";
    public courses;
    constructor(private courseData: CourseData) {
        ////NEVER EVER USE TIGHT COUPLING
        // let course = new CourseData();
        this.courses = courseData.getCourse();      // always use loose coupling using DI
    }
    // public courses: string[] = ["Angular", "typescript", "javascript"];
}