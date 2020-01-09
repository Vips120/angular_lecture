import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignInComponent } from './usersign-in.component';

describe('UsersignInComponent', () => {
  let component: UsersignInComponent;
  let fixture: ComponentFixture<UsersignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
