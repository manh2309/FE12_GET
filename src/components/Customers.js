import { Component } from "react";
import CustomerDel from "../containers/CustomerDel"
class Customers extends Component {

    render() {
        let listData = [];
        if (this.props.items.status) {
            listData = this.props.items.content.map((item, key) => {
                return (
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <CustomerDel customer ={item.id}/>
                    </tr>
                )
            })
        }
        return (
            <div className="customers">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
                            <th>Action</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Customers