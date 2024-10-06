import { Article } from '../../domain/core/entities/article.entity';

export class CreateArticleDTO {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  static fromEntity(entity: Article): CreateArticleDTO {
    return new CreateArticleDTO(entity.title, entity.content, entity.author);
  }
}
