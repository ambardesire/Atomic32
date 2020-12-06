import React, {Component} from 'react'
import '../assets/css/Solicitud2.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

/***********images*************/
import img17 from '../assets/images/Group_4016.png'
import img18 from '../assets/images/Group_4020.png'
import img19 from '../assets/images/Group_4017.png'
import img20 from '../assets/images/Group_4018.png'
import img21 from '../assets/images/Group_4023.png'

/***********Components*********/
import FooterSection from './footer'

export default class Solicitud2 extends Component{
    render(){
        return(
            <div>
                <div className="img16" style={{maxWidth:1366}}>
                    <div>
                        <span><img src={img17} alt="" className="img17"/><img src={img18} alt="" className="img18"/><img src={img19} alt="" className="img19"/><img src={img20} alt="" className="img20"/></span>
                    </div>
                    <br/>
                    <ProgressBar now={40} className="progress40"/>
                    <br/>
                    <a className="text17" href="./solicitud">&lt; Regresar</a>
                    <br/><br/>
                    <span><img src={img21} alt="" className="img21"/><span className="text18">&nbsp;VALIDA TU<span className="text19"> CELULAR</span></span></span>
                    <br/><br/>
                    <span className="text20">Necesitamos validar tu número para continuar</span>
                    <br/>
                    <span className="text21">Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</span>
                    <br/><br/>
                    <form name="Telephone Form" id="Telephone Form" onSubmit="handleSubmit">
                        <label className="text22" htmlFor="telephone">Número de Celular</label><br/>
                        <input name="telephone" className="formTel" required/>
                        <br/><br/><br/>
                    </form>
                    <a class="nav-link" href="./solicitudStep3"><button className="btn btn-light btn-sm btn4 rounded-pill">Continuar</button></a>
                </div>
                <FooterSection/>
            </div>
        )
    }
}

