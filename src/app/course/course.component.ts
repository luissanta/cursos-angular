import { Component, OnInit } from '@angular/core';
import { Course } from "./course";
import {CourseService} from "./course.service";

// En caso de necesitar datos locales que no provienen de BDs
// import { dataCourses } from "./dataCourses";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  // En caso de necesitar datos locales que no provienen de BDs
  // getCourseList(): Array<Course> {
  //   return dataCourses
  // }
  courses: Array<Course> = []

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnInit() {
    this.getCourses();
  }
}
