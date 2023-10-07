import React from 'react';
import Modal from 'react-modal';

const DepositModal = ({ isOpen, onClose, onDeposit, amount, onChangeAmount, depositError }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Deposit Modal"
        ariaHideApp={false}
      >
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <form onSubmit={onDeposit}>
              <div className="field">
                <label className="label">Deposit Amount</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={onChangeAmount}
                  />
                </div>
                {depositError && <p className="help is-danger">{depositError}</p>}
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Deposit</button>
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

  export default DepositModal ;