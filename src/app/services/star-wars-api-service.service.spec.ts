import { TestBed } from '@angular/core/testing';

import { StarWarsApiServiceService } from './star-wars-api-service.service';

describe('StarWarsApiServiceService', () => {
  let service: StarWarsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
