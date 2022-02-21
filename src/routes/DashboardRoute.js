import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Home } from '../pages/HomePage';
//import { RegistroMovies } from '../components/RegistroMovies';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/registro-peliculas" element={<RegistroMovies />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}