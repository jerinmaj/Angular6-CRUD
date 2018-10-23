import { TestBed, inject } from '@angular/core/testing';

import { EmployeecrudService } from './employeecrud.service';

describe('EmployeecrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeecrudService]
    });
  });

  it('should be created', inject([EmployeecrudService], (service: EmployeecrudService) => {
    expect(service).toBeTruthy();
  }));
});
