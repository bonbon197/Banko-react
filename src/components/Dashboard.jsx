import { useState, useEffect } from "react";
import Modal from 'react-modal';
// import 'react-modal/style.css'



const Dashboard = ({account}) => {

  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);
  const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false);
  const [transferModalIsOpen, setTransferModalIsOpen] = useState(false);

  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferAccount, setTransferAccount] = useState('');

  const [depositError, setDepositError] = useState('');
  const [withdrawError, setWithdrawError] = useState('');
  const [transferError, setTransferError] = useState('');


  const handleDeposit = (e) => {
    e.preventDefault();
    if (depositAmount <= 0) {
      setDepositError('Please enter a valid amount');
      return;
    }

    const newBalance = account.balance + parseInt(depositAmount);
    const updatedAccount = {...account, balance: newBalance};

    setDepositModalIsOpen(false);
    setDepositError('');
  }

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (withdrawAmount <= 0) {
      setWithdrawError('Please enter a valid amount');
      return;
    } else if (withdrawAmount > account.balance) {
      setWithdrawError('You do not have enough funds');
      return;
    }

    setWithdrawModalIsOpen(false);
    setWithdrawError('');
  }

  const handleTransfer = (e) => {
    e.preventDefault();
    if (transferAmount <= 0) {
      setTransferError('Please enter a valid amount');
      return;
    } else if (transferAmount > account.balance) {
      setTransferError('You do not have enough funds');
      return;
    }

    setTransferModalIsOpen(false);
    setTransferError('');
  }

  useEffect(() => {
    if (account) {
      setDepositAmount(0);
      setWithdrawAmount(0);
      setTransferAmount(0);
      setTransferAccount('');
    }
  }, [account]);


  const openDepositModal = () => {
    console.log('open deposit modal')
    setDepositModalIsOpen(true);
  }
  const closeDepositModal = () => {
    console.log('close deposit modal')
    setDepositModalIsOpen(false);
  }

  const openWithdrawModal = () => {
    console.log('open withdraw modal')
    setWithdrawModalIsOpen(true);
  }
  const closeWithdrawModal = () => {
    console.log('close withdraw modal')
    setWithdrawModalIsOpen(false);
  }

  const openTransferModal = () => {
    console.log('open transfer modal')
    setTransferModalIsOpen(true);
  }
  const closeTransferModal = () => {
    console.log('close transfer modal')
    setTransferModalIsOpen(false);
  }

  if (!account) {
    return "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  }



    return(
      <>
      <section className="section is-large">
        <div className="card">

        <h2 className="subtitle">Hello {account.firstName}</h2>
        <h2 className="subtitle">Your current balance is {account.balance}</h2>
        <div className="container">
          <h2>wat do</h2>
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-primary" onClick={openDepositModal}>Deposit</button>
            </p>
            <p className="control">
              <button className="button is-link" onClick={openWithdrawModal}>Withdraw</button>
            </p>
            <p className="control">
              <button className="button is-link" onClick={openTransferModal}>Transfer</button>
            </p>
          </div>
        </div>
        </div>
      </section>

      <Modal
        isOpen={depositModalIsOpen}
        onRequestClose={closeDepositModal}
        contentLabel="Deposit Modal"
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal-background"
      >
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <form onSubmit={handleDeposit}>
              <div className="field">
                <label className="label">Deposit Amount</label>
                <div className="control">
                  <input className="input" type="number" placeholder="Enter amount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
                </div>
                {depositError && <p className="help is-danger">{depositError}</p>}
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Deposit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light" onClick={closeDepositModal}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      </>
    );
}

export default Dashboard;