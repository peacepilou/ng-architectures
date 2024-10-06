import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ArticleRepository } from '../domain/ports/article.repository';
import { environment } from '../../../../environments/environment.development';
import { Article } from '../domain/core/entities/article.entity';
import { CreateArticleDTO } from './dtos/create-article.dto';
import { UpdateArticleDTO } from './dtos/update-article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleResponseDTO } from './dtos/article-response.dto';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiRepository extends ArticleRepository {
  private readonly BASE_URL = environment.apiUrl + '/articles';
  http: HttpClient = inject(HttpClient);

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

  override create(item: Article): Observable<Article> {
    return this.http.post<ArticleResponseDTO>(this.BASE_URL, CreateArticleDTO.fromEntity(item)).pipe(map((dto) => ArticleResponseDTO.toEntity(dto)));
  }
  override update(id: number, item: Article): Observable<Article> {
    throw new Error('Update() API...');
  }
  override delete(id: number): Observable<void> {
    throw new Error('Delete() API...');
  }
}
