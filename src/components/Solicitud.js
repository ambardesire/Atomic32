import React, {Component} from 'react'
import '../assets/css/Solicitud.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { withRouter } from 'react-router-dom'

/******images********/
import img10 from '../assets/images/Group_4014.png'
import img11 from '../assets/images/Group_4019.png'
import img12 from '../assets/images/Group_4017.png'
import img13 from '../assets/images/Group_4018.png'
import img14 from '../assets/images/Group_40152x.png'
/*import img15 from '../assets/images/ic_lock_24px.png'
import img8 from '../assets/images/Group_4043.png'*/


/***********Components*********/
import FooterSection from './footer'

const validate = values => {
    const errors = {}
    console.log(values)
    if(values.name.length < 5) {
        errors.name = 'El nombre deberá tener mínimo 5 caracteres'
    }
    return errors
}

class Solicitud extends Component{
    state = {
        errors: {}
    }   

    handleChange = ({ target }) => {
       const {name, value} = target
       this.setState({  [name]: value})
    }
    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...noErrors } = this.state
        const result = validate(noErrors)
        this.setState({ errors: result })
        if (!Object.keys(result).length){
            //Enviar formulario
            this.props.history.push('./solicitudStep2')
        }
    }

    render(){
        const { errors } = this.state
        return(
            <div>
                <div className="img9" style={{maxWidth:1366}}>
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
                    <form onSubmit={this.handleSubmit} name="Full Name" id="Full Name">
                        <label type="text" className="labelText" htmlFor="name">Nombre (s)</label><br/>
                        <input className="formAlign" name="name" onChange={this.handleChange} required/>
                            {errors.name && <h5 className="errorText">{errors.name}</h5>}
                        <br/><br/>
                        <label className="labelText" htmlFor="surname">Apellidos</label><br/>
                        <input type="text" className="formAlign" name="surname" required/>
                        <br/><br/>
                        <button type='submit' className="btn btn-light btn-sm btn3 rounded-pill" form="Full Name">Enviar</button>
                    </form>                  
                </div>
                <br/><br/><br/><br/>
                <footer><FooterSection/></footer>
                
            </div>
        )
    }
}

export default withRouter(Solicitud);