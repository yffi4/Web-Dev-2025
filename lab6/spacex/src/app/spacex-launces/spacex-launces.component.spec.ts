import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLauncesComponent } from './spacex-launces.component';

describe('SpacexLauncesComponent', () => {
  let component: SpacexLauncesComponent;
  let fixture: ComponentFixture<SpacexLauncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacexLauncesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacexLauncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
