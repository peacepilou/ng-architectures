import { Component, inject } from '@angular/core';
import { ArticleRepository } from '../../../domain/ports/article.repository';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ArticleRepositoryFactory } from '../../../infrastructure/article-repository.factory';
import { Article } from '../../../domain/core/entities/article.entity';

@Component({
  selector: 'app-article-list-2',
  standalone: true,
  providers: [
    { provide: ArticleRepository, useFactory: (factory: ArticleRepositoryFactory) => factory.createRepository(), deps: [ArticleRepositoryFactory] },
  ],
  imports: [AsyncPipe],
  templateUrl: './article-list-2.component.html',
  styleUrl: './article-list-2.component.scss',
})
export class ArticleList2Component {
  repository: ArticleRepository = inject(ArticleRepository);
  response$: Observable<Article[]> = this.repository.getAll();
}
