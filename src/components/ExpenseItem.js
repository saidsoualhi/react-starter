import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 20th 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <h2 className="expense-item__price">205 DH</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;