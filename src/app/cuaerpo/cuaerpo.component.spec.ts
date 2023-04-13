import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuaerpoComponent } from './cuaerpo.component';

describe('CuaerpoComponent', () => {
  let component: CuaerpoComponent;
  let fixture: ComponentFixture<CuaerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuaerpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuaerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
