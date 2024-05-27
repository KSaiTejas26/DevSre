import * as React from 'react';
import Header from "./Header";
import Requests from './Requests';
export default function LabTabs() {
  return (
    <>
        <Header/> 
        <h1 style={{display: 'flex',justifyContent: 'center',  alignItems: 'center'}}>
          PENDING REQUESTS
        </h1>
        <Requests/>
    </>
  );
}