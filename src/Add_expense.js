import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
export function AddExpense() {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [amount, setAmount] = useState('');
  const [data, setData] = useState('');
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dates=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const history = useHistory();
  const addexpense= ()=>{
    const newExpense = {
    date: date,
    month:month,
    year:year,
    amount: amount,
    data: data,
  }
  fetch(`https://61e81129e32cd90017acbfe1.mockapi.io/expense`,
  {method:"POST",
  body:JSON.stringify(newExpense),
  headers:{"Content-Type": "application/json"}
}).then((data)=>data.json()).then(()=>history.push("/summary/expense"))
  }
  return (
    <div className="add-expense">
      <div className="datediv">
        <TextField
          id="outlined-select-currency"
          select
          label="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          helperText="Please select date"
        >
          {dates.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="outlined-select-currency"
          select
          label="Month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          helperText="Please select month"
        >
          {months.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      <TextField id="standard-basic" label="Year" variant="standard"
        value={year}
        onChange={(event) => setYear(event.target.value)} />
        </div>
      <TextField id="standard-basic" label="Enter the amount" variant="standard"
        value={amount}
        onChange={(event) => setAmount(event.target.value)} />
      <TextField id="standard-basic" label="Enter the data" variant="standard"
        value={data}
        onChange={(event) => setData(event.target.value)} />
      <Button
        variant="contained"
        onClick={addexpense}>Add Expense</Button>
    </div>
  );
}
