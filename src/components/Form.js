import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';
import Formcss from '../styles/Form.css'

export default class Form extends Component {
    render() {
        function enviarEmail(e){
            e.preventDefault();
            emailjs.sendForm('service_plfvpu4','template_0sukhrl',e.target,'kwwaEBOdmqhP0HGzT').then(res=>{
                alert("Haz enviado el email de contacto")
                console.log(res);
            })
        }
        
        return (
            <div className='form' style={{width:"200%", marginTop:"15px"}}>
                <div className='container-form' style={{width:"50%",backgroundColor:"transparent", padding:"20px"}}>
                    <h1>Contactanos</h1>
                    <hr/>
                    <form onSubmit={enviarEmail}>
                        <div className="form-row">
                            <div className='name'>
                                <div className="form-full-name col-md-6">
                                    <label><b>Nombre Completo</b></label>
                                    <input type="text" className="form-control" id="from_name" name="from_name"/>
                                </div>
                            <div className="form-last-name col-md-6">
                                <label><b>Apellido</b></label>
                                <input type="text" className="form-control" id="to_name" name="to_name"/>
                            </div>
                            </div>
                            <div className="form-email col-md-12">
                                <label><b>Email</b></label>
                                <input type="text" className="form-control" id="email" name="email"/>
                            </div>
                            <div className="form-telefono col-md-12">
                                <label><b>Telefono</b></label>
                                <input type="text" className="form-control" id="reply_to" name="reply_to"/>
                            </div>
                        </div>
                        <div className="form-text">
                            <label><b>Mensaje</b></label>
                            <textarea type="text" className="form-control" id="message" name="message"></textarea>
                        </div>
                        <div className='container-btn'>
                            <button type="submit" className="btn btn-dark" style={{marginTop:"20px"}}>Enviar Correo</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}