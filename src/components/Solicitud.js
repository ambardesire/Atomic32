import React, {Component} from 'react'
import '../assets/css/Solicitud.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Form from 'react-bootstrap/Form'

/******images********/
import img10 from '../assets/images/Group_4014.png'
import img11 from '../assets/images/Group_4019.png'
import img12 from '../assets/images/Group_4017.png'
import img13 from '../assets/images/Group_4018.png'
import img14 from '../assets/images/Group_40152x.png'
/*import img15 from '../assets/images/ic_lock_24px.png'
import img8 from '../assets/images/Group_4043.png'*/


/***********Compnents*********/
import FooterSection from './footer'


export default class Solicitud extends Component{
    render(){
        return(
            <div>
                <p className="img9">
                    <div> 
                    <span><img src={img10} alt="" className="img10"/><img src={img11} className="img11" alt=""/><img src={img12} className="img12" alt=""/><img src={img13} className="img13" alt=""/></span>
                    </div> 
                    <br/>
                    <ProgressBar now={20} className="progress25"/>
                    <br/><br/>
                    <span><img src={img14} alt="" className="img14"/><span className="text13">TE&nbsp;QUEREMOS&nbsp;<span className="text14">CONOCER</span></span></span>
                    <br/><br/><br/>
                    <span className="text15">Queremos saber que eres tú, por favor ingresa los siguientes datos:</span>
                    <br/><br/> 
                    <form name="FullName" id="FullName">
                    <Form.Label className="labelText">Nombre (s)</Form.Label>
                    <Form.Control type="text" className="formAlign"/>
                    <br/>
                    <Form.Label className="labelText">Apellidos</Form.Label>
                    <Form.Control type="text" className="formAlign"/>
                    <br/><br/><br/>
                    <input type="submit" class="btn btn-light btn-sm btn2 rounded-pill" value="Enviar"/>
                    </form>                  
                </p>
                <br/><br/><br/>
                <footer><FooterSection/></footer>
                
            </div>
        )
    }
}