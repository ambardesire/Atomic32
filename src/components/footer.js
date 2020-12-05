import React, {Component} from 'react'
import '../assets/css/footer.css'
import icon2 from '../assets/images/linkedin.png'
import icon3 from '../assets/images/twitter.png'


export default class WebLanding extends Component{
    render(){
        return(
            <footer>
                <div className="container" style={{minWidth:1366}}>
                <br/><br/>
                <span className="footerText">&copy;&nbsp;2020&nbsp;AtomicLabs.&nbsp;Todos&nbsp;los&nbsp;derechos&nbsp;reservados.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{textDecoration: "underline"}}>Aviso&nbsp;de&nbsp;privacidad</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={icon2} className="icon2" alt=""/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={icon3} clasName="icon3" alt=""/>
                </span>
            </div>
            </footer>
        ) 
    }
}