import React, {Component} from 'react'
import '../assets/css/WebLanding2.css'
import img2 from '../assets/images/Group_4036.png'
import img3 from '../assets/images/Group_4035.png'
import img4 from '../assets/images/Group_4037.png'
import img5 from '../assets/images/Group_4040.png'
import img6 from '../assets/images/Group_4041.png'
import img7 from '../assets/images/Group_4042.png'
import img8 from '../assets/images/Group_4043.png'
import iconCheck from '../assets/images/ic_check_tiny.png'

export default class WebLanding extends Component{
    render(){
        return(
            <div>
                <div>
                    <div> 
                        <br/><br/><br/><br/>
                        <span className="text7">SOMOS&nbsp;EL&nbsp;BRAZO&nbsp;DERECHO&nbsp;</span>
                    </div>
                    <div>
                        <span className="text8">DE&nbsp;LA&nbsp;TECNOLOGÍA</span>
                    </div>
                </div>
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
                   <span>
                        <ul className="list1">
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;Usamos las tecnologías más modernas.</li>
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;Innovamos y creamos proyectos retadores.</li>
                        </ul>
                        <ul className="list2">
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;¡Trabajamos en equipo rumbo al éxito!</li>
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;No tenemos código de vestimenta.</li>
                        </ul>
                        <ul className="list3">
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;Realizamos actividades para tu bienestar.</li>
                            <li><img src={iconCheck} alt="" className="miniCheck"/>&nbsp;&nbsp;¡Tenemos un parque frente a la oficina!.</li>
                        </ul>
                   </span>
                </div>
                <div className="bottomContainer">
                    <br/><br/><br/><br/><br/>
                    <table class="table table-light" style={{marginLeft:100, height:421, width: 1150}}>
                        <thead>
                            <tr>
                            <th scope="col" className="tableTittle, rounded mb-0" style={{width:500, textAlign:"left"}}>CARACTERÍSTICAS</th>
                            <th scope="col" className="tableTittle">OTROS</th>
                            <th scope="col" className="tableAtomic lastColumn" style={{width:321}}>ATOMIC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td style={{height:37}} className="tableText">Equipo inclusivo, honesto y auténtico</td>
                            <td style={{textAlign: "center"}}><img src={iconCheck} alt="" className="iconCheck"/></td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
                            </tr>
                            <tr>
                            <td style={{height:37}} className="tableText">Puntualidad es nuestro segundo nombre</td>
                            <td style={{textAlign: "center"}}><img src={iconCheck} alt="" className="iconCheck"/></td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
                            </tr>
                            <tr>
                            <td style={{height:37}} className="tableText">Siempre innovamos en nuestros productos</td>
                            <td style={{textAlign: "center"}}><img src={iconCheck} alt="" className="iconCheck"/></td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
                            </tr>
                            <tr>
                            <td style={{height:37}} className="tableText">Te ayudamos a crecer e implementar nuevos conocimientos</td>
                            <td> </td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
                            </tr>
                            <tr>
                            <td style={{height:37}} className="tableText">Nos preocupamos por tu bienestar</td>
                            <td> </td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
                            </tr>
                            <tr>
                            <td style={{height:37}} className="tableText">El respeto es una parte fundamental</td>
                            <td> </td>
                            <td style={{textAlign: "center"}} className="lastColumn"><img src={iconCheck} alt="" className="iconCheck"/></td>
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