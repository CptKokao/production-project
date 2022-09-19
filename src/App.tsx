import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import './styles/index.scss';
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";


const App = () => {
    const {theme, toogleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toogleTheme}>toogleTheme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
             <Suspense fallback="Loading...">
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
             </Suspense>
        </div>
    )
}

export default App;