// @ts-nocheck
'use client';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
// import Web3 from 'web3';

export function Review(props: any) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(props.isSuccess);
  const [waitLoading, setWaitLoading] = useState<Boolean>(false);
  const [writeLoading, setWriteLoading] = useState<Boolean>(false);
  // const [supplyInWei, setSupplyinWei] = useState('');

  console.log(
    'wei',
    props.ideaDetails.supplyInWei,
    props.ideaDetails.maxSupplyInWei
  );
  // console.log('weiiiiiii', web3.utils.toWei('1', 'ether'));

  const handlePrev = () => {
    props.nextBtn(2);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isPrepareError) {
      write?.();
    } else {
      toast(prepareError?.message);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast('Idea created successfully');
      setTimeout(() => {
        router.push('idea');
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="subheading">
        <h2>IDEA REVIEW :</h2>
      </div>

      <div className="row review-details">
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Idea Details :</h3>
            <div className="review-info">
              <label htmlFor="">Idea Details :</label>
              <span>{props.ideaDetails.name}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Coin Symbol:</label>
              <span>{props.ideaDetails.symbol}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Decimals :</label>
              <span>{props.ideaDetails.decimals}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Idea Details :</h3>
            <div className="review-info">
              <label htmlFor="">Collateral Supply :</label>
              <span>{props.ideaDetails.supply}</span>
            </div>
            <div className="review-info">
              <label htmlFor="">Supply Type:</label>
              <span>{props.ideaDetails.initialSupply}</span>
            </div>
            {props.ideaDetails.maxSupply != '' && (
              <div className="review-info">
                <label htmlFor="">Max Supply :</label>
                <span>{props.ideaDetails.maxSupply}</span>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Permission Management Details :</h3>
            <p className="wallet-address-list">Wallet Address</p>
            <div className="review-info">
              <label htmlFor="">Mint:</label>
              <div className="hash-tag">
                <span>{props.managementDetails.cashWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Burn:</label>
              <div className="hash-tag">
                <span>{props.managementDetails.burnWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Wipe :</label>
              <div className="hash-tag">
                <span>{props.managementDetails.wipeWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
            <div className="review-info">
              <label htmlFor="">Pause :</label>
              <div className="hash-tag">
                <span>{props.managementDetails.pauseWalletAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 review-area">
          <div className="review-box">
            <h3>Proof Of Idea Details :</h3>
            <div className="review-info">
              <label htmlFor="">Oracle Feed Address:</label>
              <div className="hash-tag">
                <span>{props.proofofIdea.oracleFeedAddress}</span>{' '}
                <button className="copybtn">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-botm-wrap">
        <button type="submit" className="backbtn" onClick={() => handlePrev()}>
          <img src="../imgs/back-icon.svg" alt="" /> Go Back
        </button>
        <button
          type="submit"
          className="nextbtn"
          disabled={writeLoading || waitLoading}
          onClick={(e) => handleSubmit(e)}
        >
          {writeLoading || waitLoading ? 'Creating...' : 'Create Idea'}
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
