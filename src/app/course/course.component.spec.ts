import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import {AppComponent} from "../app.component";
import { HttpClientModule } from '@angular/common/http';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ AppComponent, CourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
