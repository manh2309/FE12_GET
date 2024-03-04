import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CustomerPage, HomePage } from "./pages"

const RouterRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/customers" element={<CustomerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterRoot