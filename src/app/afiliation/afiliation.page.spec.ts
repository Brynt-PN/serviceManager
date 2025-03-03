import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfiliationPage } from './afiliation.page';

describe('AfiliationPage', () => {
  let component: AfiliationPage;
  let fixture: ComponentFixture<AfiliationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
