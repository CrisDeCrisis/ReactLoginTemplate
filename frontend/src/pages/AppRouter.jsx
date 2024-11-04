import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, LoadingPage, NotFoundPage, RegisterPage } from "../views";
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
