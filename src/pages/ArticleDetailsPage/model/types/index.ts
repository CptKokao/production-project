import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface articleDetailsPageSchema {
	recommendations: ArticleDetailsRecommendationsSchema,
	comments: ArticleDetailsCommentsSchema,
}
