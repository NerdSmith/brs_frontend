import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navigation} from "./components/nav/navigation";
import {Login} from "./components/auth/login";

function App() {
    return (
        <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="/logout" element={<Logout/>}/>*/}
            </Routes>
        </BrowserRouter>
    )

}

export default App;