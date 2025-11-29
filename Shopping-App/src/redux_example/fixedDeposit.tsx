import type { RootState } from '../store'
import { useSelector} from 'react-redux'

export default function Fixeddeposit() {
    const accuntBalanceObj = useSelector((state: RootState) => state.accountBalance);
    return (
        <>
            <hr />
                <h2>Fixed Deposit Block</h2>
                <div> The user current balance - {accuntBalanceObj.balance}</div>
            <hr />
        </>
    )
}