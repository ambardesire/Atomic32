import React, {Component} from 'react'
import '../assets/css/Solicitud3.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

/********images********/
import img23 from '../assets/images/Group_4016.png'
import img24 from '../assets/images/Group_4021.png'
import img25 from '../assets/images/Group_4018.png'
import img26 from '../assets/images/Group_4024.png'
import editIcon from '../assets/images/Group_4026.png'

/********Components********/
import FooterSection from './footer'

export default class Solicitud3 extends Component{
    render(){
        return(
            <div>
                <div className="img22" style={{maxwidth:1366}}>
                    <div>
                        <span><img src={img23} alt="" className="img23"/><img src={img23} alt="" className="img231"/><img src={img24} alt="" className="img24"/><img src={img25} alt="" className="img25"/></span>
                    </div>
                    <br/>
                    <ProgressBar now={60} className="progress60"/>
                    <br/>
                    <a className="text23" href="./solicitudStep2">&lt; Regresar</a>
                    <br/><br/>
                    <span><img src={img26} alt="" className="img26"/><span className="text18">&nbsp;CÓDIGO DE<span className="text19"> VERIFICACIÓN</span></span></span>
                    <br/><br/>
                    <span className="text26">Te enviamos un SMS al número:</span><br/>
                    <span className="text26">+52 55 1850 9196&nbsp;<a href="./editar"><img src={editIcon} alt="" className="editIcon"/></a></span>
                    <br/><br/>
                    <span className="text27">Ingresa el código de verificación:</span>
                    <br/><br/> 
                    <form>
                        <label className="text28" htmlFor="verification">Código de verificación</label><br/>
                        <input name="verification" className="formVerification" required/>
                        <br/><br/><br/>
                    </form>
                    <span className="text29">¿No recibiste el código?<span className="text30">&nbsp;Reenviar código</span></span>
                    <br/>    
                    <a class="nav-link" href="./solicitudStep4"><button className="btn btn-light btn-sm btn5 rounded-pill">Validar código</button></a>
                </div>
                <FooterSection/>
            </div>
        )
    }
}