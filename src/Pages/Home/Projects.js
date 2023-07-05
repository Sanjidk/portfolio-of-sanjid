import React from 'react';
import Footer from '../Shared/Footer';

const Projects = () => {
    return (
        <div >
            <h1 className='font-bold text-center text-slate-300 text-2xl lg:text-4xl lg:my-4'> PROJECT LIST </h1>

            <div className='lg:flex gap-8 text-white mx-2'>
                <div className="card bg-black shadow-xl mt-2">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?t=st=1654809778~exp=1654810378~hmac=e835e04546c1f2e13efba158ad5f8bf238472818c27db257423f9b1e51b2ac95&w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-8">Laptop Warehouse Management</h2>
                        <div className='flex gap-4'>
                            <div className="card-actions">
                                <a target='_blank' href="https://warehouse-management-9da9a.web.app/signup">
                                    <button className="btn btn-primary text-white">Live Site</button>
                                </a>
                            </div>
                            <div className="card-actions">
                                <a target='_blank' href="https://github.com/Sanjidk/warehouse-management-client-by-sanjid">
                                    <button className="btn btn-primary text-white">Github Client</button>
                                </a>
                            </div>
                            <div className="card-actions">
                                <a target='_blank' href="https://github.com/Sanjidk/warehouse-management-server-by-sanjid">
                                    <button className="btn btn-primary text-white">Github Server</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-black shadow-xl mt-2">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1654809588~exp=1654810188~hmac=f39697098a09bf83df17706964263654ee854235bcf5dab0fc028e8540fb0715&w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title mb-8">Food Lover House</h2>
                        <div className='flex gap-4'>
                            <div className="card-actions">
                                <a target='_blank' href="https://food-lover-house-sanjidk.netlify.app/">
                                    <button className="btn btn-primary text-white">Live Site</button>
                                </a>
                            </div>
                            <div className="card-actions">
                                <a target='_blank' href="https://github.com/Sanjidk/lucky-one-food-lover">
                                    <button className="btn btn-primary text-white">Github Client</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-black shadow-xl mt-2">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-psd/frame-mockup-with-photography-concept_23-2147875339.jpg?t=st=1654809887~exp=1654810487~hmac=3b34233f5bd8e74f99d273e1d13b17c0a234cf7e8f6f3e781c0aa6b095cedd81&w=740" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title mb-8">Independent Photograph Provider</h2>
                        <div className='flex gap-4'>
                            <div className="card-actions">
                                <a target='_blank' href="https://service-provider-sanjidk.web.app/">
                                    <button className="btn btn-primary text-white">Live Site</button>
                                </a>
                            </div>
                            <div className="card-actions">
                                <a target='_blank' href="https://github.com/Sanjidk/independent-service-provider">
                                    <button className="btn btn-primary text-white">Github Client</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;