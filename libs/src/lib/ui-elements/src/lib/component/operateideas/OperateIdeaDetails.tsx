// @ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../../../../../../apps/dapp/app/operate/page.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

/* eslint-disable-next-line */
// export interface ICoinDetails {}
export function OperateIdeaDetails(props: any) {
  const [ideas, setIdeas] = useState([]);
  const [selectedCoinAddress, setSelectedCoinAddress] = useState();
  const [selectedCoinAddressErr, setSelectedCoinAddressErr] = useState('');
  const [selectedCoinAddressType, setSelectedCoinAddressType] = useState('');
  const [selectedCoinAddressTypeErr, setSelectedCoinAddressTypeErr] =
    useState('');
  const [callFunctionName, setCallFunctionName] = useState('');
  const [amount, setAmount] = useState();
  const [address, setAddress] = useState('');
  console.log('ideas', selectedCoinAddress);
  const [amountErr, setAmountErr] = useState('');
  const [args, setArgs] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const readData = props.readData;
  const decimalData = props.decimalData;
  const writeData = props.writeData;
  const data = props.data;
  const [writeLoading, setWriteLoading] = useState<Boolean>(false);
  const [waitLoading, setWaitLoading] = useState<Boolean>(false);
  const [isSuccess, setIsSuccess] = useState(props.isSuccess);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShowPopup(!showPopup);
  const [callSubmit, setCallSubmit] = useState(true);

  console.log('console decimals', decimalData, typeof amount);

  useEffect(() => {
    if (data && data?.length > 0) {
      setIdeas(data);
    }
  }, [data]);
  useEffect(() => {
    if (args && args?.length >= 0) {
      if (
        selectedCoinAddressType == 'currentsupply' ||
        selectedCoinAddressType == 'cappedsupply'
      ) {
      } else {
        if (isPrepareError) {
          toast(prepareError?.message);
        } else {
          write?.();
        }
      }
    }
  }, [args]);
  useEffect(() => {
    if (writeData) {
      handleShow();
    }
  }, [writeData]);

  useEffect(() => {
    if (readData) {
      handleShow();
    }
  }, [readData]);
  const updateAddressType = (ele: any) => {
    setSelectedCoinAddressType(ele.target.value);
    if (ele.target.value == 'cash') {
      setCallFunctionName('mint');
    }
    if (ele.target.value == 'burn') {
      setCallFunctionName('burnFrom');
    }
    if (ele.target.value == 'pause') {
      setCallFunctionName('pause');
    }
    if (ele.target.value == 'unpause') {
      setCallFunctionName('unpause');
    }
    if (ele.target.value == 'currentsupply') {
      setCallFunctionName('totalSupply');
    }
    if (ele.target.value == 'cappedsupply') {
      setCallFunctionName('cap');
    }
  };
  const submitForm = () => {
    let error = 0;
    if (selectedCoinAddress == '') {
      error = 1;
      setSelectedCoinAddressErr('Please select address');
    } else {
      setSelectedCoinAddressErr('');
    }
    if (selectedCoinAddressType == '') {
      error = 1;
      setSelectedCoinAddressTypeErr('Please select type');
    } else {
      setSelectedCoinAddressTypeErr('');
      if (selectedCoinAddressType == 'burn') {
        if (amount == undefined) {
          error = 1;
          setAmountErr('Please enter amount');
        }
      }
    }
    if (error == 0) {
      if (
        ['pause', 'unpause', 'currentsupply', 'cappedsupply'].indexOf(
          selectedCoinAddressType
        ) != -1
      ) {
        setArgs([]);
      }
      if (
        selectedCoinAddressType == 'burn' ||
        selectedCoinAddressType == 'cash'
      ) {
        let myargs = [];
        myargs.push(address);
        // myargs.push(amount);
        myargs.push((amount.toString(), decimalData));
        setArgs(myargs);
        setCallSubmit(true);
      }

      /*  setTimeout(() => {
      console.log(args);
      write?.();
    }, 2000); */
    }
  };
  return (
    <>
      <div className="col-4">
        <div className={styles['operate-box']}>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setSelectedCoinAddress(e.target.value)}
          >
            <option selected>Select Idea</option>
            {ideas.map((address: string) => {
              return (
                <option value={address.coinAddress}>
                  {address.name} - {address.symbol}
                </option>
              );
            })}
          </select>
          {selectedCoinAddressErr != '' && (
            <p className="error-msg">{selectedCoinAddressErr}</p>
          )}
        </div>
        <div className={styles['operate-box']}>
          <select
            className="form-select"
            aria-label="Default select example"
            value={selectedCoinAddressType}
            onChange={(e) => updateAddressType(e)}
          >
            <option selected>Choose An Operation</option>
            <option value="cash">Mint</option>
            <option value="burn">Burn</option>
            <option value="pause">Pause</option>
            <option value="unpause">Unpause</option>
            <option value="currentsupply">Current Supply</option>
            {/* <option value="updateColleateral">Update Colleateral</option> */}

            {/* <option value="cappedsupply">Capped Supply</option> */}
          </select>
          {selectedCoinAddressTypeErr != '' && (
            <p className="error-msg">{selectedCoinAddressTypeErr}</p>
          )}
        </div>
        {(selectedCoinAddressType == 'cash' ||
          selectedCoinAddressType == 'burn') && (
          <>
            <div className={styles['cashBox']}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {amountErr != '' && <p className="error-msg">{amountErr}</p>}
            </div>
            <br></br>
            <div className={styles['cashBox']}>
              <label>Amount</label>
              <input
                type="number"
                name="cash"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
              />
              {amountErr != '' && <p className="error-msg">{amountErr}</p>}
            </div>
          </>
        )}
        {selectedCoinAddressType != 'currentsupply' &&
          selectedCoinAddressType != 'cappedsupply' && (
            <div>
              <button
                type="button"
                className={styles['submitBtn']}
                disabled={writeLoading || waitLoading}
                onClick={() => submitForm()}
              >
                {writeLoading || waitLoading ? 'Submitting....' : 'Submit'}
              </button>
            </div>
          )}
      </div>
      <Modal
        show={
          show &&
          (isSuccess ||
            selectedCoinAddressType == 'currentsupply' ||
            selectedCoinAddressType == 'cappedsupply')
        }
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCoinAddressType != 'currentsupply' &&
            selectedCoinAddressType != 'cappedsupply'
              ? 'Transaction Successful'
              : 'Details'}
          </Modal.Title>
        </Modal.Header>
        {(selectedCoinAddressType == 'currentsupply' ||
          selectedCoinAddressType == 'cappedsupply') && (
          <Modal.Body>
            <h5>Idea Supply:</h5>{' '}
            {readData &&
              decimalData}{' '}
            ideas
          </Modal.Body>
        )}
        {selectedCoinAddressType != 'currentsupply' &&
          selectedCoinAddressType != 'cappedsupply' && (
            <Modal.Body className="wordwrap">
              <h5>Blockchain Explorer:</h5>
              {isSuccess && (
                <a
                  target="_blank"
                  href={
                    }
                >
                  Click here for confirmation.
                </a>
              )}
            </Modal.Body>
          )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
