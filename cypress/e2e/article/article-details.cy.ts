let currentArticleId = '';

describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Статьи успешно загружаются', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Отображаются списки рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Оставляет оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('Rating').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
