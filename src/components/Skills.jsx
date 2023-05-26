import React from 'react';
import Feature  from '../components/Feature/Feature'

const Skills = () => {
  return (
      <div className='container' style={{marginTop:"180px", marginBottom:"150px"}}>
          <h1 className='section-title'>Fort<span>a</span>lezas</h1>
          <div className='d-flex' style={{gap: '120px', marginBottom:"50px"}}>
            <Feature title="Privacidad Médica" text="Garantizamos la seguridad y esterilización de los equipos médicos así como la no divulgación de información."/>
            <Feature title="Equipamiento Moderno" text="Utilizamos solamente equipos médicos modernos, habilidades acerca de las ultimas tendencias en el area de estetica y las innovaciones que se introducen en nuestra práctica."/>
            <Feature title="Profesionales Reconocidos" text="Los médicos de nuestra estetica cuentan con certificados internacionales y son reconocidos en todo la provincia." />
          </div>
          <div className='d-flex' style={{gap: '120px'}}>
            <Feature title="Reserva una visita" text="Puede solicitar una cita con uno de nuestros especialistas y recibir un recordatorio antes de la visita a la estetica."/>
            <Feature title="Nuevos Enfoques" text="La medicina moderna esta avanzando constantemente y podemos ofrecer a nuestros clientes los tratamientos, enfoques y  más actualizados."/>
            <Feature title="Monitoreamos tu salud" text="Hemos desarrollado programas especiales que permiten a nuestros clientes visitar periódicamente a un especialista de nuestra estetica para continuar mejorando su salud." />
          </div>
      </div>
  )
}

export default Skills;