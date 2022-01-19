import { Show } from './Show';
import { useState,useEffect} from 'react';
export function DisplayExpense() {

    const [expenselist,setExpenseList]=useState([])
    const getexpense=()=>{
        fetch(`https://61e81129e32cd90017acbfe1.mockapi.io/expense`,{method:"GET"}).
        then((data)=>data.json()).then((obj)=>setExpenseList(obj))
      }
        useEffect(getexpense,[]);
   
  return (
    <div className="income-list">
      {expenselist.map(({ date,month,year, amount, data }) => <Show
        date={date}
        month={month}
        year={year}
        amount={amount}
        data={data} />)}
    </div>
  );
}
