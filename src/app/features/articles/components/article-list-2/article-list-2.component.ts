import { Component, inject } from '@angular/core';
import { ArticleRepository } from '../../repositories/abstractions/article-repository.interface';
import { ArticleRepositoryFactory } from '../../repositories/abstractions/article-repository.factory';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Article } from '../../models/entities/article.entity';

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
