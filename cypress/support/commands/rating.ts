export const setRating = (
    starsCount: number = 5,
    feedback: string = 'feedback',
) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('Rating.Input').type(feedback);
    cy.getByTestId('Rating.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
