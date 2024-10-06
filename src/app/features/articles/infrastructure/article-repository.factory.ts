import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ArticleLocalRepository } from './article-local.repository';
import { ArticleApiRepository } from './article-api.repository';
import { ArticleRepository } from '../domain/ports/article.repository';

@Injectable({
  providedIn: 'root',
})
export class ArticleRepositoryFactory {
  localRepository = inject(ArticleLocalRepository);
  apiRepository = inject(ArticleApiRepository);

  constructor() {}

  createRepository(): ArticleRepository {
    console.log(environment);

    if (environment.production || environment.staging) {
      return this.apiRepository;
    }

    return environment.replaceApiCallsWithMocks ? this.localRepository : this.apiRepository;
  }
}
