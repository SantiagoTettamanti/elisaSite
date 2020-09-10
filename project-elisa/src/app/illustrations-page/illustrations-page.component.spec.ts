import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationsPageComponent } from './illustrations-page.component';

describe('IllustrationsPageComponent', () => {
  let component: IllustrationsPageComponent;
  let fixture: ComponentFixture<IllustrationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
