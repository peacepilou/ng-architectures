import { inject, Injectable } from '@angular/core';
import { ArticleRepository } from './article-repository.interface';
import { ArticleLocalRepository } from '../article-local-repository';
import { ArticleApiRepository } from '../article-api-repository';
import { environment } from '../../../../../environments/environment';

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
