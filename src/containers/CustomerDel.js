import { useDispatch } from "react-redux"
import * as actions from "../actions/CustomerAction"
function CustomerDel(props){
   const unitpatch=useDispatch()
    const {customer} = props
    const handSubmit=()=>{
        console.log(customer)
        unitpatch(actions.delListCustomer(customer))
    }


    return(
        <td><button onClick={handSubmit} >DELETE</button></td>
    )
}
export default CustomerDel;