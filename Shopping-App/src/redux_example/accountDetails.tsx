import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import {updateBalance} from './balanceUpdateSlicer';




export default function AccountBalance() {
    const dispatch = useDispatch();
    let accntBalance: number;
    const accountBalanceObj = useSelector((state: RootState) => state.accountBalance);
    let handleChange = (event:any) => {
        accntBalance = event.target.value;
    }
    const handleUpdateAccountBalance = () => {
        accntBalance = parseInt(accntBalance);
       dispatch(updateBalance(accntBalance));
    }

    return (
        <>
            Account Balance - <b>{accountBalanceObj.balance}</b>
            <div>
                <input type="number"  placeholder="Account Balance" onChange={handleChange}/> 
                <button onClick={handleUpdateAccountBalance}>Update Account Balance</button>
            </div>
        </>
    )
}