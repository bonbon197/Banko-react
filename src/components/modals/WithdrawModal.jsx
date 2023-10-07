import React from 'react';
import Modal from 'react-modal';

const WithdrawalModal = ({ isOpen, onClose, onWithdraw, amount, onChangeAmount, withdrawalError }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Withdrawal Modal"
      ariaHideApp={false}
    >
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <form onSubmit={onWithdraw}>
            <div className="field">
              <label className="label">Withdrawal Amount</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={onChangeAmount}
                />
              </div>
              {withdrawalError && <p className="help is-danger">{withdrawalError}</p>}
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Withdraw</button>
              </div>
              <div className="control">
                <button className="button is-link is-light" onClick={onClose}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export { WithdrawalModal };
