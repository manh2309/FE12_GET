import { Component } from "react";
import CustomerContainer from "../containers/CustomerContainer";

class CustomerPage extends Component {
    render() {
        return (
            <div className="home-page">
                <h1>Trang Customer</h1>
                <CustomerContainer />
            </div>
        )
    }
}
export default CustomerPage