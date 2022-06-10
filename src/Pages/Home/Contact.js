import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black text-white">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <h1 className="text-4xl font-bold"> Contact Info </h1>
                        <h1 className=" font-bold"> If anyone have any query, feel free to contact with me </h1>
                        <h1 className="text-1xl font-bold"> Email: sanjidk24@gmail.com </h1>
                        <h1 className="text-1xl font-bold"> Phone: 01580593250  </h1>
                        <h1 className="text-1xl font-bold"> Github: https://github.com/Sanjidk </h1>
                        <h1 className="text-1xl font-bold"> Linkedin: https://www.linkedin.com/in/md-mahmud-sanjid/ </h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-3xl font-bold text-center text-blue-600'> Contact Form</h1>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="number" placeholder="Your Mobile Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" placeholder="Write Your Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send To Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;