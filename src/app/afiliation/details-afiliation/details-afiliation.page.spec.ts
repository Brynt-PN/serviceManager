import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsAfiliationPage } from './details-afiliation.page';

describe('DetailsAfiliationPage', () => {
  let component: DetailsAfiliationPage;
  let fixture: ComponentFixture<DetailsAfiliationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAfiliationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
