import React from 'react'


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
                        <li className="social__link social__link--facebook"><a class="some" href="https://www.facebook.com" rel="nofollow noopener noreferrer" target="_blank" title="facebook.com Facebook"> Facebook</a></li>
                        <li className="social__link social__link--instagram"><a class="some" href="https://www.instagram.com" rel="nofollow noopener noreferrer" target="_blank" title="instagram.com Instagram"> Instagram</a></li>
                        <li className="social__link social__link--twitter"><a class="some" href="https://twitter.com" rel="nofollow noopener noreferrer" target="_blank" title="Twitter"> Twitter</a></li>
                    </ul>
                    <div className="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
            </div>     
        </div>
    </footer>
  )
}