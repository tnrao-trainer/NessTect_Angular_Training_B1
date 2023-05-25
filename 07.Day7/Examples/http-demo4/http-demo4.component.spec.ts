import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo4Component } from './http-demo4.component';

describe('HttpDemo4Component', () => {
  let component: HttpDemo4Component;
  let fixture: ComponentFixture<HttpDemo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpDemo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
