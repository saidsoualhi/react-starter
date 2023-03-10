import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    console.log('props:: ', props)
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2 className="expense-item__price">${props.amount}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;