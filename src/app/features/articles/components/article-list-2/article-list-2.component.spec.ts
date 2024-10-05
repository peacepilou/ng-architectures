import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleList2Component } from './article-list-2.component';

describe('ArticleList2Component', () => {
  let component: ArticleList2Component;
  let fixture: ComponentFixture<ArticleList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleList2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
