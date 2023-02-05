import ExpenseItem from "./components/ExpenseItem";

function App() {
  const items = [
    {
      title: 'First title',
      amount: 20,
      date: new Date(2022, 5, 12),
    },
    {
      title: 'Second title',
      amount: 40,
      date: new Date(2023, 1, 2),
    }
  ]
  return (
    <div className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date}/>
      <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}/>
    </div>
  );
}

export default App;
