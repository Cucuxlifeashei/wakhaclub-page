import React from 'react';
import {Accordion} from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import Accordioncss from '../../src/styles/Accordion.css'

const Acordion = () => {
    return (
        <div className='container-accordion'>
            <Accordion className='accordion'>
                <AccordionItem className='accordion-item-1' >
                    <AccordionHeader>
                        <h6>GENERAL</h6>
                    </AccordionHeader>
                    <AccordionBody>
                        • WAKHA es un club nocturno ubicado en la zona de Liniers, Buenos Aires, Argentina. Este establecimiento ofrece una experiencia única de vida nocturna para los que disfrutan de la verdadera joda.<br></br><br></br>

                        • WAKHA cuenta con una amplia pista de baile, una variedad de Zonas VIPS y una barra de bebidas que ofrece Vodka, Espumantes, Ron, Etc.<br></br><br></br>

                        • La música en WAKHA es variada y siempre de alta calidad, con DJ's que tocan los últimos éxitos del momento y los clásicos de todos los tiempos para satisfacer a todos los gustos. Además, el club organiza regularmente eventos temáticos y Shows en vivo para hacer de cada noche una experiencia única.<br></br><br></br>

                        • WAKHA es el lugar perfecto para celebrar una noche especial con amigos, disfrutar de una noche de fiesta, celebrar tu Cumpleaños, ofrecemos Beneficios para los Cumpleañeros de el mismo Mes.<br></br><br></br>

                        • El club está ubicado en una zona accesible de Liniers, cerca de la Estacion y fácil acceso en transporte público. WAKHA abre sus puertas los Viernes de 00:00 horas hasta las 6 de la mañana.<br></br><br></br>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className='accordion-item' eventKey='1'>
                    <AccordionHeader>
                    <h6>REGLAS DE VESTIMENTA</h6>
                    </AccordionHeader>
                    <AccordionBody>
                    • Como parte de nuestra política de mantener un buen ambiente de Vestimenta, se aplica un código de vestimenta.<br></br><br></br>

                    • Está prohibido el ingreso con ropa deportiva, incluyendo pantalones de jogging, shorts de entrenamiento, zapatillas deportivas y camisetas de equipos deportivos o el Ingreso con Gorra/Visera<br></br><br></br>

                    • Aclaracion: Se permite el Ingreso con Jeans Rotos, Lentes de Sol, Chombas, Pantalones Cargos o Chalecos De Color/Reflex.<br></br><br></br>

                    • Además, WAKHA se reserva el derecho de admisión y permanencia, por lo que cualquier persona que no cumpla con los estándares de vestimenta adecuados no podrá ingresar al club.<br></br><br></br>

                    • Es importante destacar que la política de vestimenta se aplica a todos los asistentes, sin excepción, y es parte de nuestra filosofía de ofrecer una experiencia única y sofisticada para todos los que visitan nuestro club. <br></br><br></br>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem className='accordion-item' eventKey='2'>
                    <AccordionHeader>
                    <h6>SOBRE INGRESOS</h6>
                    </AccordionHeader>
                    <AccordionBody>
                    • Para garantizar una experiencia segura y sin problemas, contamos con un proceso de ingreso.<br></br><br></br>

                    • Al llegar a la entrada, las personas se separarán en dos filas: una para mujeres y otra para hombres. Para ingresar, se deberá presentar el documento de identidad (DNI) con un mínimo de 18 años, ya sea en formato físico o en la aplicación MiArgentina.<br></br><br></br>

                    • Una vez dentro, se realiza un cacheo para asegurar que no se porten objetos peligrosos o ilegales. Este proceso de seguridad es obligatorio para garantizar la integridad de todos los presentes en WAKHA.<br></br><br></br>

                    • Una vez dentro del club, se puede acceder a la boletería, donde se puede realizar el pago final de Entradas Generales, Mesas VIPs o Vouchers. En WAKHA, nos esforzamos por ofrecer la mejor experiencia nocturna, por lo que nuestras mesas VIPs ofrecen una experiencia exclusiva, con atención personalizada, espacios cómodos y regalos como cotillon o hasta Alcohol de parte de nuestros Organizadores.<br></br><br></br>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Acordion;