import React from 'react'
import '../App.css';


export default function Footer() {
  return (
    <footer className="py-5 bg-dark">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-3 col-md-3 item">
                    <ul>
                        <h5>Helsingin myymälä</h5>
                        <li>Helsinginkatu 11</li> 
                        <li>00200 Helsinki</li> 
                        <li>ma-la   9-21</li> 
                        <li>su  12-19</li> 
                    </ul>
                </div>
                <div className="col-sm-3 col-md-3 item">
                    <ul>
                        <h5>Oulun myymälä</h5>
                        <li>Oulunkatu 5</li> 
                        <li>08570 Oulu</li> 
                        <li>ma-la 9-21</li> 
                        <li>su 12-19</li> 
                    </ul>
                </div>
                <div className="col-sm-3 col-md-3 item">
                    <ul>
                        <h5>Asiakaspalvelu</h5>
                        <li>asiakaspalvelu@livingtech.fi</li>
                        <li>Puh. 0800 78594</li> 
                    </ul>
                </div>
                <div className="col-sm-3 col-md-3 item">
                    <ul>
                        <h5>Sosiaalinen media</h5>
                        <span><a href='https://www.facebook.com'><img src="../images/facebook.png" className='socialicons'></img></a></span>
                        <span className='socialspan'><a href='https://www.instagram.com'><img src="../images/ig.jfif" className='socialicons'></img></a></span>
                        <span className='socialspan'><a href='https://twitter.com'><img src="../images/twitter.png" className='socialicons'></img></a></span>
                    </ul>
                </div>
            </div>     
        </div>
    </footer>
  )
}