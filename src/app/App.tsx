import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "app/providers/router";
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toogleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toogleTheme}>toogleTheme</button>
        </div>
    )
}

export default App;