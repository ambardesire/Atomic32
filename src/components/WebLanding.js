import React, {Component} from 'react'
import '../assets/css/WebLanding.css'
import icon1 from '../assets/images/Group_4013.png'

/***********Compnents*********/
import WebLanding2 from './WebLanding2'
import FooterSection from './footer'

export default class WebLanding extends Component{
    render(){
        return(
            <div>
                <p className="img1">
                    <div> 
                        <span className="text1">Desarrolla&nbsp;todo</span>
                    </div>
                    <div>
                        <span className="text2">tu&nbsp;POTENCIAL</span>
                    </div>
                    <div>
                        <span className="text3">dentro&nbsp;del&nbsp;equipo</span>
                    </div>
                    <div>
                        <span className="text4"><span className="text5">atomic</span>labs</span>
                    </div>
                    <div>
                          <a class="nav-link" href="./solicitud"><button type="button" class="btn btn-light btn-sm btn1 rounded-pill">¡Quiero ser parte!</button></a>
                    </div>
                </p>
                <img src={icon1} alt="" className="icon1"/><br/>
                <span className="text6">Quiero saber más</span>
                <WebLanding2/>
                <FooterSection/>
            </div>
        ) 
    }
}