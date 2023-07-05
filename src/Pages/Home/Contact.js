import React from 'react';
import Footer from '../Shared/Footer';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen text-white">
                <div className=" hero hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <h1 className="text-4xl font-bold"> Contact Info </h1>
                        <h1 className="text-1xl"> <span className="font-bold">Email: </span> mahmud.sanjid10@gmail.com </h1>
                        <h1 className="text-1xl"> <span className="font-bold">Phone: </span>  01580593250  </h1>
                        <h1 className="text-1xl"> <span className="font-bold">Github: </span>  https://github.com/Sanjidk </h1>
                        <h1 className="text-1xl"> <span className="font-bold">Linkedin:  </span> https://www.linkedin.com/in/mahmud-sanjid/ </h1>
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-black bg-base-100">
                        <form action="https://formsubmit.co/399653a73ef6bcb2d921d06b5e47b9f7" method="POST">
                            <div className="card-body">
                                <h1 className='text-3xl font-bold text-center text-blue-600'> Contact Form</h1>
                                <div className="form-control">
                                    <input name='Name' type="text" placeholder="Your Full Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='Email' type="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='Country' type="text" placeholder="Your Country Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <textarea name='Message' className="textarea textarea-bordered" placeholder="Write Your Message" required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Send To Email</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
<Footer></Footer>
        </div>
    );
};

export default Contact;