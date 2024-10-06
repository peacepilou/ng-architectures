import { Article } from '../models/entities/article.entity';

export class ArticleDTO {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  static toEntity(dto: ArticleDTO): Article {
    return new Article(dto.id, dto.title, dto.content, dto.author, dto.createdAt, dto.updatedAt);
  }
  static fromEntity(entity: Article): ArticleDTO {
    return new ArticleDTO(entity.id, entity.title, entity.content, entity.author, entity.createdAt, entity.updatedAt);
  }
}
