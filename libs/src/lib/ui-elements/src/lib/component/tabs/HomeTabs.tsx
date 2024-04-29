// @ts-nocheck
'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Details } from './Details';
import { PermissionManagement } from './PermissionManagement';
import { ProofOfIdea } from './ProofOfIdea';
import { Review } from './Review';
import { useState } from 'react';
export function HomeTabs() {
  const [TabKey, setTabKey] = useState(0);
  const [ideaDetails, setIdeaDetails] = useState({});
  const [managementDetails, setManagementDetails] = useState({});
  const [proofofIdea, setProofofIdea] = useState({});  
  const nextBtn = (key : number) => {
    
    setTabKey(key);
  }
  const saveIdeaDetails = (data:any) => { 
    console.log(data,'stable');   
    setIdeaDetails(data);
    setTabKey(1);
  }
  const saveManagementDetails = (data : any) => {    
    setManagementDetiails(data);
    setTabKey(2);
  }
  const saveproofofIdea = (data : any) => {
    setProofofIdea(data);
    setTabKey(3);
  }
  return (
    <>    
    <Tabs
      defaultActiveKey={0}
      id="uncontrolled-tab-example"
      activeKey={TabKey}
      onSelect={(k) => setTabKey(Number(k))}
    >
      <Tab eventKey={0} title="Idea details">
        
        <Details nextBtn={nextBtn} tabkey={TabKey} saveIdeaDetails = {saveIdeaDetails}/>
      </Tab>
      <Tab eventKey={1} title="Manage Permissions">
        <PermissionManagement nextBtn={nextBtn} tabkey={TabKey} saveManagementDetails = {saveManagementDetails}/>
      </Tab>
      <Tab eventKey={2} title="Proof Of Idea">
        <ProofOfIdea nextBtn={nextBtn} tabkey={TabKey} saveproofofIdea = {saveproofofIdea}/>
      </Tab>
      <Tab eventKey={3} title="Review">
        <Review nextBtn={nextBtn} tabkey={TabKey} ideaDetails={ideaDetails} 
          managementDetails = {managementDetails} proofofIdea ={proofofIdea}/>
      </Tab>
    </Tabs>    
    </>
  );
}

