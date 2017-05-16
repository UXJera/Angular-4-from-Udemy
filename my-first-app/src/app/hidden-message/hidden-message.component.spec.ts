import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenMessageComponent } from './hidden-message.component';

describe('HiddenMessageComponent', () => {
  let component: HiddenMessageComponent;
  let fixture: ComponentFixture<HiddenMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
