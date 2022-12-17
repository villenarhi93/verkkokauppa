import React from "react";
import Header from "../components/Header"
import '../App.css';
import { Link } from "react-router-dom";


export default function Home() {
    
    return (
        <>
        <Header />
       
            <section className="py-5">

            <h1 id="h1">Valitse itsellesi sopivimmat tuotteet tuoteryhmän sivulta</h1>

                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                         <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute">Myydyimmät</div>
                                <img class="card-img-top" src="./images/emolevy/asusprimeb550.jpg" alt="..." />
                                    <div className="card-body p-4"></div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <h3 className="fw-bolder">Emolevyt</h3>
                                                Asus, MSI
                                        </div>
                                    <span className="homespan">
                                         <Link to="/products/1"><span className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Näytä tuoteryhmä</a></span></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute">Arvostetuimmat</div>
                                <img class="card-img-top" src="./images/kiintolevy/samsung1tbpro980.jpg" alt="..." />
                                    <div className="card-body p-4"></div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                      <h3 className="fw-bolder">SSD-levyt</h3>
                                         Kingston, Samsung
                                    </div>
                                    <span className="homespan">
                                         <Link to="/products/2"><span className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Näytä tuoteryhmä</a></span></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute"></div>
                                <img class="card-img-top" src="./images/muisti/kingston16gbfurybeast.jpg" alt="..." />
                                    <div className="card-body p-4"></div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                          <h3 className="fw-bolder">Muistit</h3>
                                            Corsair, GSkill, Kingston
                                        </div>
                                    <span className="homespan">
                                         <Link to="/products/3"><span className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Näytä tuoteryhmä</a></span></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute"></div>
                                <img class="card-img-top" src="./images/näytönohjain/asusgeforce4090.jpg" alt="..." />
                                    <div className="card-body p-4"></div>
                                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                          <h3 className="fw-bolder">Näytönohjaimet</h3>
                                            Asus, Gigabyte, KFA, MSI
                                        </div>
                                    <span className="homespan">
                                         <Link to="/products/4"><span className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Näytä tuoteryhmä</a></span></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                         <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute"></div>
                                <img class="card-img-top" src="./images/prosessori/amdryzen75800x3d.jpg" alt="..." />
                                    <div className="card-body p-4"></div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                          <h3 className="fw-bolder">Prosessorit</h3>
                                            AMD, IntelCore
                                         </div>
                                    <span className="homespan">
                                         <Link to="/products/5"><span className="text-center"><a className="btn btn-outline-dark mt-auto" href="">Näytä tuoteryhmä</a></span></Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}