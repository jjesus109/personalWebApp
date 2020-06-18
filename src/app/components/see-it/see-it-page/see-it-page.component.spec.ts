import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeItPageComponent } from './see-it-page.component';

describe('SeeItPageComponent', () => {
  let component: SeeItPageComponent;
  let fixture: ComponentFixture<SeeItPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeItPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeItPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
