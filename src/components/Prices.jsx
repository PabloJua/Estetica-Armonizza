import React from 'react'

const Prices = () => {
    return (
        <div className='container' style={{ marginTop: "250px", marginBottom: "250px", padding:"0px 200px 0 200px" }}>
            <h1 className='section-title' style={{ marginBottom: "40px" }}>Pre<span>c</span>ios</h1>
            <p className='text-center' style={{ marginBottom: "40px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil nesciunt, totam sit libero fugiat similique laudantium architecto praesentium, alias mollitia dolorum modi ad consequatur aliquam quia nemo quidem tempora.</p>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" >
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Free</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-outline gradient__text" style={{border:"3px solid #51a351"}}>Sign up for free</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Pro</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>20 users included</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg gradient">Get started</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm " style={{borderColor:"#aac098"}}>
                        <div class="card-header py-3 text-bg gradient">
                            <h4 class="my-0 fw-normal">Enterprise</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>30 users included</li>
                                <li>15 GB of storage</li>
                                <li>Phone and email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg gradient">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Prices