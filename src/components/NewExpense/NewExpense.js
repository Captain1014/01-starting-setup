import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const [isAdding, setisAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
   props.onAddExpense(expenseData);
   setisAdding(false);
  }

  const addNewExpenseHandler = () => {
setisAdding(true);
  }

  const stopAddingHandler = () => {
    setisAdding(false);
  }
  return (
    <div className="new-expense">
     {!isAdding && <button onClick={addNewExpenseHandler}>Add New Expense</button>} 
      {isAdding &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopAddingHandler}/>}
    </div>
  );
};
export default NewExpense;
