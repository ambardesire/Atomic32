import React, {Component} from 'react'
import '../assets/css/Solicitud4.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import FormCheck from 'react-bootstrap/FormCheck'
import Form from 'react-bootstrap/Form'


/********images********/
import img28 from '../assets/images/Group_4016.png'
import img29 from '../assets/images/Group_4022.png'
import img30 from '../assets/images/Group_4025.png'

/**********Components******/


import FooterSection from './footer'

export default class Solicitud4 extends Component{
    render(){
        return(
            <div>
                <div className="img27">
                    <div>
                        <span><img src={img28} alt="" className="img28"/><img src={img28} alt="" className="img281"/><img src={img28} alt="" className="img281"/><img src={img29} alt="" className="img281"/></span>
                    </div>
                    <br/>
                    <ProgressBar now={90} className="progress80"/>
                    <br/>
                    <a className="text31" href="./solicitudStep3">&lt; Regresar</a>
                    <br/><br/>
                    <span><img src={img30} alt="" className="img30"/><span className="text32">&nbsp;TÉRMINOS Y<span className="text33"> CONDICIONES</span></span></span>
                    <br/><br/>
                    <span className="text34">Por favor revisa nuestros términos y condiciones para este servicio:</span><br/>
                    <span className="text35">Consulta Términos y Condiciones</span>
                    <br/><br/>
                    <Form.Group controlId="formBasicCheckbox">
                        <FormCheck type="checkbox" label="Acepto los Términos y Condiciones"/>
                    </Form.Group>
                </div>
                <FooterSection/>
            </div>
        
        )
    }
}