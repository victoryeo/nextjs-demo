// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* eslint-disable-next-line */
export interface IIdeaDetails {}
export function IdeaDetails(props: IIdeaDetails) {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdeaAddress, setSelectedIdeaAddress] = useState();
  const [selectedIdeaDetails, setSelectedIdeaDetails] = useState({});

  const ideaDetails = props.ideaDetails;
  const data = props.data;
  
  useEffect(() => {
    if (data?.length > 0) {
      setIdeas(data);
    }
  }, [data]);
  useEffect(() => {
    if (ideaDetails) {
      setSelectedIdeaDetails(ideaDetails);
    }
  }, [ideaDetails]);
  const getIdeaDetails = (ele: any) => {
    setSelectedIdeaAddress(ele.target.value);
  };
  return (
    <>
      <div className="col-4 col-md-4">
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => getIdeaDetails(e)}
          >
            <option selected>Select Idea</option>
            {ideas.map((address: string) => {
              return (
                <option value={address.ideaAddress}>
                  {address.name} - {address.symbol}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {ideaDetails && (
        <div className="row review-details">
          <div className="col-md-4 review-area">
            <div className="review-box">
              <h3>Idea Details :</h3>
              <div className="review-info address">
                <label htmlFor="">Idea Address:</label>
                <span>{ideaDetails?.ideaAddress}</span>
              </div>
              <div className="review-info">
                <label htmlFor="">Idea Details :</label>
                <span>{ideaDetails?.name}</span>
              </div>
              <div className="review-info">
                <label htmlFor="">Idea Symbol:</label>
                <span>{ideaDetails?.symbol}</span>
              </div>
              <div className="review-info">
                <label htmlFor="">Decimals :</label>
                <span>{ideaDetails?.decimal}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 review-area">
            <div className="review-box">
              <h3>Idea Supply Details :</h3>
              <div className="review-info">
                <label htmlFor="">Collateral Supply:</label>
                <span>
                  {ideaDetails?.initialSupply
                    ? Number(
                        (
                          ideaDetails?.initialSupply,
                          ideaDetails?.decimal
                        )
                      )
                    : ''}
                </span>
              </div>
              <div className="review-info">
                <label htmlFor="">Supply Type:</label>
                <span>
                  {ideaDetails?.maxSupply == 0 ? 'Infinite' : 'Finite'}
                </span>
              </div>
              {ideaDetails?.maxSupply != 0 && (
                <div className="review-info">
                  <label htmlFor="">Max Supply :</label>
                  <span>
                    {ideaDetails?.maxSupply
                      ? Number(
                          ethers.utils.formatUnits(
                            ideaDetails?.maxSupply,
                            ideaDetails?.decimal
                          )
                        )
                      : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 review-area">
            <div className="review-box">
              <h3>Permission Management Details :</h3>
              <p className="wallet-address-list">Wallet Address</p>

              <div className="review-info">
                <label htmlFor="">Cash In:</label>
                <div className="hash-tag">
                  <span>{ideaDetails?.minter}</span>{' '}
                  <button className="copybtn">Copy</button>
                </div>
              </div>
              <div className="review-info">
                <label htmlFor="">Burn:</label>
                <div className="hash-tag">
                  <span>{ideaDetails?.burner}</span>{' '}
                  <button className="copybtn">Copy</button>
                </div>
              </div>
              <div className="review-info">
                <label htmlFor="">Default Admin :</label>
                <div className="hash-tag">
                  <span>{ideaDetails?.defaultAdmin}</span>{' '}
                  <button className="copybtn">Copy</button>
                </div>
              </div>
              <div className="review-info">
                <label htmlFor="">Pause :</label>
                <div className="hash-tag">
                  <span>{ideaDetails?.pauser}</span>{' '}
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 review-area">
            <div className="review-box">
              <h3>Proof Of Reserve Details :</h3>
              <div className="review-info">
                <label htmlFor="">Oracle Feed Address:</label>
                <div className="hash-tag">
                  <span>{ideaDetails?.feedAddress}</span>{' '}
                  <button className="copybtn">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
