import { inject } from '@angular/core';
import { ArticleRepository } from '../../ports/article.repository';
import { Observable } from 'rxjs';
import { Article } from '../entities/article.entity';
import { CreateArticleDTO } from '../../../infrastructure/dtos/create-article.dto';

export class CreateArticleUseCase {
  private articleRepo: ArticleRepository = inject(ArticleRepository);

  execute(article: Article): Observable<Article> {
    return this.articleRepo.create(article);
  }
}
