import { useState, useEffect } from "react";
import Modal from 'react-modal';
import { saveToLocalStorage, getFromLocalStorage } from "../db/dbInterface";
import { DepositModal } from "./modals/DepositModal";
import { WithdrawalModal } from "./modals/WithdrawModal";

const Dashboard = ({ account }) => {
  const [modalIsOpen, setModalIsOpen] = useState({
    deposit: false,
    withdraw: false,
    transfer: false,
  });

  const [amounts, setAmounts] = useState({
    deposit: 0,
    withdraw: 0,
    transfer: 0,
  });

  const [errors, setErrors] = useState({
    deposit: '',
    withdraw: '',
    transfer: '',
  });

  const [currentBalance, setCurrentBalance] = useState(0);

  useEffect(() => {
    if (account) {
      setCurrentBalance(account.balance);
    }
  }, [account]);

  const openModal = (type) => {
    setModalIsOpen({ ...modalIsOpen, [type]: true });
  }

  const closeModal = (type) => {
    setModalIsOpen({ ...modalIsOpen, [type]: false });
  }

  const handleChangeAmount = (type, e) => {
    setAmounts({ ...amounts, [type]: e.target.value });
    setErrors({ ...errors, [type]: '' });
  }

  const handleDeposit = (e) => {
    e.preventDefault();
    const depositAmount = parseInt(amounts.deposit);
    
    if (depositAmount <= 0) {
      setErrors({ ...errors, deposit: 'Please enter a valid amount' });
      return;
    }
    

    account.balance += depositAmount;

    const accounts = getFromLocalStorage('accounts');
    const updatedAccounts = accounts.map((acc) =>
      acc.id === account.id ? account : acc
  );

  saveToLocalStorage(updatedAccounts);
  setCurrentBalance(account.balance);
  closeModal('deposit');
  }

  const handleWithdraw = (e) => {
    e.preventDefault();
    const withdrawAmount = parseInt(amounts.withdraw);

    if (withdrawAmount <= 0) {
      setErrors({ ...errors, withdraw: 'Please enter a valid amount' });
      return;
    } else if (withdrawAmount > account.balance) {
      setErrors({ ...errors, withdraw: 'You do not have enough funds' });
      return;
    }

    account.balance -= withdrawAmount;

    const accounts = getFromLocalStorage('accounts');
    const updatedAccounts = accounts.map((acc) =>
      acc.id === account.id ? account : acc
    );

    saveToLocalStorage(updatedAccounts);
    setCurrentBalance(account.balance);
    closeModal('withdraw');
  }

  const handleTransfer = (e) => {
    e.preventDefault();
    const transferAmount = parseInt(amounts.transfer);

    if (transferAmount <= 0) {
      setErrors({ ...errors, transfer: 'Please enter a valid amount' });
      return;
    } else if (transferAmount > account.balance) {
      setErrors({ ...errors, transfer: 'You do not have enough funds' });
      return;
    }

    closeModal('transfer');
  }

  useEffect(() => {
    if (account) {
      setAmounts({
        deposit: 0,
        withdraw: 0,
        transfer: 0,
      });
      setErrors({
        deposit: '',
        withdraw: '',
        transfer: '',
      });
      setCurrentBalance(account.balance);
    }
  }, [account]);

  if (!account) {
    return "huh";
  }

  return (
    <>
      <section className="section is-large">
        <div className="card">
          <h2 className="subtitle">Hello {account.firstName}</h2>
          <h2 className="subtitle">Your current balance is {currentBalance}</h2>
          <div className="container">
            <h2>wat do</h2>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-primary" onClick={() => openModal('deposit')}>Deposit</button>
              </p>
              <p className="control">
                <button className="button is-link" onClick={() => openModal('withdraw')}>Withdraw</button>
              </p>
              <p className="control">
                <button className="button is-link" onClick={() => openModal('transfer')}>Transfer</button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card">
          <h2 className="subtitle">Transaction History</h2>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="transaction">
                        <p>Transaction {index + 1}</p>
                        <p>Date: {transaction.date}</p>
                        <p>Description: {transaction.description}</p>
                        <p>Amount: ${transaction.amount}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DepositModal
        isOpen={modalIsOpen.deposit}
        onClose={() => closeModal('deposit')}
        onDeposit={handleDeposit}
        amount={amounts.deposit}
        onChangeAmount={(e) => handleChangeAmount('deposit', e)}
        depositError={errors.deposit}
      />

      <WithdrawalModal
        isOpen={modalIsOpen.withdraw}
        onClose={() => closeModal('withdraw')}
        onWithdraw={handleWithdraw}
        amount={amounts.withdraw}
        onChangeAmount={(e) => handleChangeAmount('withdraw', e)}
        depositError={errors.withdraw}
      />

      <Modal
        isOpen={modalIsOpen.transfer}
        onRequestClose={() => closeModal('transfer')}
        contentLabel="Transfer Modal"
        ariaHideApp={false}
      >
      </Modal>
    </>
  );
}

export default Dashboard;
