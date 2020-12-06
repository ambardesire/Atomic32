import React, {Component} from 'react'
import '../assets/css/WebLanding2.css'
import img2 from '../assets/images/Group_4036.png'
import img3 from '../assets/images/Group_4035.png'
import img4 from '../assets/images/Group_4037.png'
import img5 from '../assets/images/Group_4040.png'
import img6 from '../assets/images/Group_4041.png'
import img7 from '../assets/images/Group_4042.png'
import img8 from '../assets/images/Group_4043.png'

export default class WebLanding extends Component{
    render(){
        return(
            <div>
                <p>
                    <div> 
                        <br/><br/><br/><br/>
                        <span className="text7">SOMOS&nbsp;EL&nbsp;BRAZO&nbsp;DERECHO&nbsp;</span>
                    </div>
                    <div>
                        <span className="text8">DE&nbsp;LA&nbsp;TECNOLOGÍA</span>
                    </div>
                </p>
                <br/><br/><br/>
                <div class="card-deck" style={{marginLeft:30}}>
                    <div class="card sideCards" style={{maxWidth:370, height:439}}>
                        <img src={img3} class="card-img-top" className="img3" alt="..." style={{alignSelf:"center"}}/>
                        <div class="card-body">
                        <h5 class="card-title orangeTittle">EXPLORA</h5>
                        <p class="card-text blueText">
                            <ul>
                                <li>Inovación&nbsp;y&nbsp;<span style={{fontWeight: 600}}>creación&nbsp;tecnológica</span></li>
                                <li><span style={{fontWeight: 600}}>UI/UX</span></li>
                                <li><span style={{fontWeight: 600}}>Innovación</span></li> 
                            </ul>
                        </p>
                        </div>
                    </div>
                    <div class="card middleCard" style={{maxWidth:476, height:561, marginTop:-60}}>
                        <img src={img2} class="card-img-top" className="img2" alt="..." style={{alignSelf:"center"}}/>
                        <div class="card-body">                        
                        <h5 class="card-title whiteTittle">IMAGINA</h5>
                        <br/><br/>
                        <p class="card-text whiteText">
                            <ul>
                                <li><span style={{fontWeight: 600}}>Estrategia</span>&nbsp;Digital</li>
                                <li>Big&nbsp;Data&nbsp;&amp;&nbsp;<span style={{fontWeight: 600}}>Analysis</span></li>
                                <li><span style={{fontWeight: 600}}>Consultoría</span>&nbsp;Tecnológica</li>
                                <li><span style={{fontWeight: 600}}>Reducción</span>&nbsp;de&nbsp;costos&nbsp;TI</li> 
                            </ul>
                        </p>
                        </div>
                    </div>
                    <div class="card sideCards" style={{maxWidth: 370, height:450}}>
                        <img src= {img4} class="card-img-top" className="img4" alt="..."  style={{alignSelf:"center"}}/>
                        <div class="card-body">
                        <h5 class="card-title orangeTittle">CONQUISTA</h5>
                        <p class="card-text blueText2">
                            <ul>
                                <li>Desarrollo&nbsp;tecnológico<span style={{fontWeight: 600}}>&nbsp;a&nbsp;la&nbsp;medida</span></li>
                                <li><span style={{fontWeight: 600}}>Ciberseguridad</span></li>
                                <li><span style={{fontWeight: 600}}>Servicios&nbsp;de&nbsp;la&nbsp;nube</span></li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <p>
                    <div> 
                        <br/><br/><br/><br/>
                        <span className="text9">¡TE&nbsp;ENCANTARÁ</span>
                    </div>
                    <div>
                        <span className="text10">TRABAJAR&nbsp;CON&nbsp;NOSOTROS!</span>
                    </div>
                </p>
                <img src={img5} clasName="img5" alt="" style={{marginLeft:80}}/>
                <div className="text11" style={{marginLeft:150}}>
                    <span style={{width:70, height:53}}>Contratación&nbsp;remota&nbsp;</span>
                    <span className="arrow">&nbsp;→&nbsp;</span>
                    <span>&nbsp;Entrevista&nbsp;con&nbsp;el&nbsp;área&nbsp;de&nbsp;RH&nbsp;</span>
                    <span className="arrow">&nbsp;→&nbsp;</span>
                    <span>&nbsp;Prueba&nbsp;práctica&nbsp;</span>
                    <span className="arrow">&nbsp;→&nbsp;</span>
                    <span>&nbsp;Entrevista&nbsp;técnica</span>
                </div>
                <br/><br/>
                <div>
                    <a class="nav-link" href="./Solicitud"><button type="button" class="btn btn-light btn-sm btn2 rounded-pill">¡Quiero ser parte!</button></a>
                </div>
                <br/><br/>
                <p>
                    <span className="text9">¿POR&nbsp;QUÉ&nbsp;<span className="orange">ATOMIC?</span></span>
                </p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="topContainer">
                    <span><img src={img6} alt="" className="img6"/><img src={img7} className="img7" alt=""/><img src={img8} className="img8" alt=""/></span>
                    <br/><br/>
                </div>
                <div className="bottomContainer">
                    <table class="table table-light" style={{marginLeft:100}}>
                        <thead>
                            <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" style={{height:37}}>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                            <tr>
                            <th scope="row" style={{height:37}}>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/><br/>
                    <div>
                        <a class="nav-link" href="./Solicitud"><button type="button" class="btn btn-light btn-sm btn2 rounded-pill">¡Quiero ser parte!</button></a>
                    </div>

                </div>
            </div>
        ) 
    }
}