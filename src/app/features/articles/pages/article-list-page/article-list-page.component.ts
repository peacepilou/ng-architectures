import { Component } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { ArticleList2Component } from '../../components/article-list-2/article-list-2.component';

@Component({
  selector: 'app-article-list-page',
  standalone: true,
  imports: [ArticleListComponent, ArticleList2Component],
  templateUrl: './article-list-page.component.html',
  styleUrl: './article-list-page.component.scss',
})
export class ArticleListPageComponent {}
