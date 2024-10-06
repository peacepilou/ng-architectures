import { Article } from '../../domain/core/entities/article.entity';

export class ArticleResponseDTO {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  static toEntity(dto: ArticleResponseDTO): Article {
    return new Article(dto.id, dto.title, dto.content, dto.author, dto.createdAt, dto.updatedAt);
  }
}
