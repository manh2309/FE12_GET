import { Component } from "react";

class Customers extends Component {
    render() {
        let listData = [];
        if (this.props.items.status) {
            listData = this.props.items.content.map((item, key) => {
                return (
                    <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.tenKh}</td>
                        <td>{item.diaChi}</td>
                        <td>{item.dienThoai}</td>
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
                        </tr>
                        {listData}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Customers