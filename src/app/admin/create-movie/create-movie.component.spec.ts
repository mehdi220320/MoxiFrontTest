import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieComponent } from './create-movie.component';

describe('CreateMovieComponent', () => {
  let component: CreateMovieComponent;
  let fixture: ComponentFixture<CreateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
