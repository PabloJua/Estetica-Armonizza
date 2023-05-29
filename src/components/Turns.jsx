import React, { useState } from 'react'

const Turns = () => {
    const initialForm = {
        name: "",
        tel: "",
        email: "",
        dia: "",
        hora:"",
        servicio: ""
    };

    const [formState, setFormState] = useState(initialForm);
    const { name, tel, email, dia, hora, servicio} = formState;
    const [buttonMessage, setButtonMessage] = useState("Enviar Mensaje");
    const [loading, setIsLoading ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        setTimeout(() => {
            setIsLoading(false);
            setButtonMessage("Mensaje Enviado"); /* Mensaje que se muestra en el boton */
            setFormState(initialForm);
        },1000)
    };

    const onchange = (e) => {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value})
    };

    return (
        <div className='service-top' style={{ marginTop: "150px", marginBottom: "150px" }}>
           <div>
                <h1 className='section-title' style={{ marginBottom:"40px" }}>Tur<span>n</span>os</h1>
           </div>
           <div>
                <p className='text-center' style={{ marginBottom: "40px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo saepe natus adipisci sunt nesciunt dolor. Sunt animi modi temporibus aliquid excepturi doloribus.</p>
           </div>
            <form className='form-turns' onSubmit={onSubmit}>
                <div className='input-row d-flex pb-5'>
                    <div className='side'>
                        <input type="text" placeholder='¿Cuál es tu nombre?' name='name' required value={name} onChange={onchange}/>
                    </div>
                    <div className='side'>
                        <input type="tel" placeholder='¿Cuál es tu teléfono?' name='tel' required value={tel} onChange={onchange}/>
                    </div>
                </div>


                <div className='pb-5'>
                    <input type='email' placeholder='¿Cuál es tu correo electrónico?' name='email' required value={email} onChange={onchange} />
                </div>


                <div className='d-flex pb-5 input-row'>
                    <div className='side'>
                        <input type="date" name="dia" id="dia" required value={dia} onChange={onchange}/>
                    </div>
                    <div className='side'>
                        <select name="hora" id="hora" required value={hora} onChange={onchange}>
                            <option value="0">09:00 am</option>
                            <option value="1">09:30 am</option>
                            <option value="2">10:00 am</option>
                            <option value="3">10:30 am</option>
                            <option value="4">11:00 am</option>
                            <option value="5">11:30 am</option>
                            <option value="6">12:00 am</option>
                            <option value="7">12:30 am</option>
                            <option value="8">13:00 am</option>
                        </select>
                    </div>
                </div>

                    <div className='col-4 pb-5'>
                        <select name="servicio" id="servicio" required value={servicio} onChange={onchange} className='w-75 p-2'>
                            <option value="0">Opcion 1</option>
                            <option value="1">Opcion 2</option>
                            <option value="2">Opcion 3</option>
                            <option value="3">Opcion 4</option>
                            <option value="4">Opcion 5</option>
                        </select>
                        
                    </div>
                    <div className='justify-content-center'> 
                       {/* <label htmlFor="" className='d-block'> Mensaje</label>
                        <textarea name="" id="" cols="10" rows="10" className='w-75 p-2' ></textarea> */}
                        <button type="submit" className='d-block mt-4 btn-turno'>{loading ? "": buttonMessage}</button>
                    </div>
            </form >
        </div>


    )

}

export default Turns;