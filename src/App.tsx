import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAync } from "./pages/AboutPage/AboutPage.async";
import "./index.scss";

const App = () => {
    return (
        <div className="app">
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О Сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="/about" element={<AboutPageAync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
