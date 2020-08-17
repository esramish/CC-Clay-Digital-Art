import { TestBed } from '@angular/core/testing';

import { ContentHtmlService } from './content-html.service';

describe('ContentHtmlService', () => {
  let service: ContentHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
