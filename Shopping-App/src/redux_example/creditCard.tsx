import type { RootState } from '../store'
import { useSelector} from 'react-redux'

export default function Creditcard() {
     const accuntBalanceObj = useSelector((state: RootState) => state.accountBalance);
    return (
        <>
            <hr />
                <h2>Credit Card block</h2>
                <div> Balance of customer account - {accuntBalanceObj.balance}</div>
            <hr />
        </>
    )
}