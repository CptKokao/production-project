import { Routes, Route, Link } from "react-router-dom";
import './styles/index.scss';
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const App = () => {
    const {theme, toogleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>toogleTheme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
             <Suspense fallback="Loading...">
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
             </Suspense>
        </div>
    )
}

export default App;