import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForhomeComponent } from './forhome.component';

describe('ForhomeComponent', () => {
  let component: ForhomeComponent;
  let fixture: ComponentFixture<ForhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
