
// @ts-ignore
import AForm from './Form'
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import React from 'react';


const FormWithLanguageRoute = (props: any) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AForm/>}/>
            <Route path="/:lang" element={<AForm/>}/>
        </Routes>
        </BrowserRouter>);
};

export default FormWithLanguageRoute;