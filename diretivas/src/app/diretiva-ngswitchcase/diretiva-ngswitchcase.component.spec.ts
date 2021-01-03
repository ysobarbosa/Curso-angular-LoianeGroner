import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswitchcaseComponent } from './diretiva-ngswitchcase.component';

describe('DiretivaNgswitchcaseComponent', () => {
  let component: DiretivaNgswitchcaseComponent;
  let fixture: ComponentFixture<DiretivaNgswitchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgswitchcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
