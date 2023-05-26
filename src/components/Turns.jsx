import React from 'react';

const Turns = () => {
    return (
        <div className='container' style={{ marginTop: "150px", marginBottom: "150px" }}>
            <form>
                <div>
                    <h1 className='section-title' style={{ marginBottom: "20px" }}>Tur<span>n</span>os</h1>
                    <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo saepe natus adipisci sunt nesciunt dolor. Sunt animi modi temporibus aliquid excepturi doloribus.</p>
                </div>

                <div className='d-flex pb-3' style={{ marginLeft: "150px" }}>
                    <div className='col-4'>
                        <label htmlFor="" className='d-block'>Nombre</label>
                        <input className='p-2 w-100' type="text" />
                    </div>
                    <div className='col-8' style={{ marginLeft: "50px" }}>
                        <label htmlFor="" className='d-block'>Telefono</label>
                        <input type="tel" className='p-2 w-75 ' />
                    </div>
                </div>


                <div className='pb-3' style={{ marginLeft: "150px", marginRight: "150px" }}>
                    <label htmlFor="" className='d-block'>Email</label>
                    <input type="email" className='w-100 p-2' />
                </div>


                <div className='d-flex pb-4' style={{ marginLeft: "150px" }}>
                    <div className='col-4'>
                        <label htmlFor="" className='d-block'>Seleccione el día</label>
                        <input type="date" name="" id="" className='w-100 p-2' />
                    </div>
                    <div className='col-8' style={{ marginLeft: "50px" }}>
                        <label htmlFor="" className='d-block'>Seleccione la hora</label>
                        <select name="" id="" className='w-75 p-2' style={{ marginRight: "150px" }}>
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

                <div className='d-flex' style={{ marginLeft: "150px" }}>
                    <div className='col-4 '>
                        <label htmlFor="" className='d-block'>Seleccione el servicio</label>
                        <select name="" id="" className='w-75 p-2'>
                            <option value="0">Opcion 1</option>
                            <option value="1">Opcion 2</option>
                            <option value="2">Opcion 3</option>
                            <option value="3">Opcion 4</option>
                            <option value="4">Opcion 5</option>
                        </select>
                        
                    </div>
                    <div className='col-8 d-flex justify-content-center pt-4'> 
                       {/* <label htmlFor="" className='d-block'> Mensaje</label>
                        <textarea name="" id="" cols="10" rows="10" className='w-75 p-2' ></textarea> */}
                        <button type="submit" className='btn d-block mt-4' style={{padding:"30px 100px 30px 100px", backgroundColor:"#2a4d30a2", color:"whitesmoke", fontWeight:"700"}}>Reservar</button>
                    </div>
                </div>
            </form >
        </div>


    )

}

export default Turns;