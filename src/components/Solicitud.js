import React, {Component} from 'react'
import '../assets/css/Solicitud.css'

/***********Compnents*********/
import FooterSection from './footer'

export default class Solicitud extends Component{
    render(){
        return(
            <div>
                <p className="img9">
                    <div> 
                        <span className="text12">Desarrolla&nbsp;todo</span>
                    </div> 
                </p>
                <footer><FooterSection/></footer>
                
            </div>
        )
    }
}