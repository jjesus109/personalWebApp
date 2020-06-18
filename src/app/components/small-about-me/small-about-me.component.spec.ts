import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAboutMeComponent } from './small-about-me.component';

describe('SmallAboutMeComponent', () => {
  let component: SmallAboutMeComponent;
  let fixture: ComponentFixture<SmallAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
