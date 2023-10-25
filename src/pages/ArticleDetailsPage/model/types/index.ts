import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface articleDetailsPageSchema {
    recommendations: ArticleDetailsRecommendationsSchema;
    comments: ArticleDetailsCommentsSchema;
}
