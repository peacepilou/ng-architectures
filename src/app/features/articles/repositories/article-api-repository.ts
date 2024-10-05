import { Injectable } from '@angular/core';
import { ArticleRepository } from './abstractions/article-repository.interface';
import { Observable, of } from 'rxjs';
import { Article } from '../models/entities/article.entity';
import { CreateArticleDTO } from '../models/dtos/create-article.dto';
import { UpdateArticleDTO } from '../models/dtos/update-article.dto';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiRepository extends ArticleRepository {
  private readonly BASE_URL = environment.apiUrl + '/articles';

  constructor() {
    console.log('New instance...');
    super();
  }

  override getAll(): Observable<Article[]> {
    console.log('call local... on URL : ', this.BASE_URL);
    return of([] as Article[]);
  }
  override getById(id: number): Observable<Article> {
    throw new Error('GetById() API...');
  }
  override create(item: CreateArticleDTO): Observable<Article> {
    throw new Error('Create() API...');
  }
  override update(id: number, item: UpdateArticleDTO): Observable<Article> {
    throw new Error('Update() API...');
  }
  override delete(id: number): Observable<void> {
    throw new Error('Delete() API...');
  }
}
