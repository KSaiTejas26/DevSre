import React from 'react'
import logo from './pngegg.png'
export default function VendorInfo() {
    return (
        <div>
            <div className="info" style={{
                display: 'flex', 
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
                <div className="logo" >
                    <img src={logo} style={{ height: '200px', margin: 'auto' }} alt="hi" />
                </div>
                <div className="title">
                    <h1 style={{marginTop:'70px'}}>The Gardening Company</h1>
              
                    <p style={{fontSize:'15px'}}>Your one-stop shop for vibrant, healthy plants and flowers,<br /> bringing nature's beauty into your home and garden.</p>
                </div>


            </div>
        </div>
    )
}
