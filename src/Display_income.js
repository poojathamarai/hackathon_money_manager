import { Show } from './Show';
import { useState,useEffect} from 'react';
export function DisplayIncome() {
  const [incomelist,setIncomeList]=useState([])
    const getincome=()=>{
        fetch(`https://61e81129e32cd90017acbfe1.mockapi.io/income`,{method:"GET"}).
        then((data)=>data.json()).then((obj)=>setIncomeList(obj))
      }
        useEffect(getincome,[]);
  return (
    <div className="income-list">
      {incomelist.map(({ date,month,year, amount, data }) => <Show
        date={date}
        month={month}
        year={year}
        amount={amount}
        data={data} />)}
    </div>
  );
}
