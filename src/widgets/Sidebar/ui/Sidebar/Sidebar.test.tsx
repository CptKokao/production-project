import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toogle Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toogleBtn = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
