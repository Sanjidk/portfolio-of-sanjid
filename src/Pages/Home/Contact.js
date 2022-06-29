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

        </div>
    );
};

export default Contact;