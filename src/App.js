
import './App.css';
import {Switch,Route} from "react-router-dom";
import { DisplayExpense } from './Display_expense';
import { NotFound } from './NotFound';
import { DisplayIncome } from './Display_income';
import { useHistory } from 'react-router-dom';
import { AddIncome } from './Add_income';
import { AddExpense } from './Add_expense';
import Button from '@mui/material/Button';
import { Home } from './Home';
function App() {
  const history = useHistory();
  return ( 
  
  <div className="App">
      <div className="router-container">
      <Button  variant="contained" onClick={()=> history.push("/")}>HOME</Button>
      <Button  variant="contained" onClick={()=> history.push("/add/income")}>ADD INCOME</Button>
      <Button  variant="contained" onClick={()=> history.push("/add/expense")}>ADD EXPENSE</Button>
      <Button  variant="contained" onClick={()=> history.push("/summary/income")}>INCOME SUMMARY</Button>
      <Button  variant="contained" onClick={()=> history.push("/summary/expense")}>EXPENSE SUMMARY</Button>
        </div>
        <Switch>
        <Route exact path="/"> <Home/></Route>
        <Route path="/add/income"><AddIncome/></Route>
        <Route path="/add/expense"><AddExpense/></Route>
        <Route path="/summary/income"><DisplayIncome/></Route>
      <Route path="/summary/expense"><DisplayExpense/></Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
