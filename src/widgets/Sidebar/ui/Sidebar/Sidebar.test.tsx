import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toogle Sidebar', () => {
        ComponentRender(<Sidebar />);
        const toogleBtn = screen.getByTestId('sidebar-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
