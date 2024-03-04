import { Component } from "react";
import * as actions from "../actions/CustomerAction"
import { connect } from "react-redux";
import Customers from "../components/Customers";

class CustomerContainer extends Component {
    componentDidMount() {
        this.props.initLoad();
    }
    render() {
        return <Customers {...this.props} />
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items.listItem,
    }
}

const mapDispatch = (dispatch) => {
    return {
        initLoad: () => {
            return dispatch(actions.getListCustomer())
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(CustomerContainer)
