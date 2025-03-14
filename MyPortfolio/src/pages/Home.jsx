import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="hero text-center d-flex align-items-center justify-content-center">
            <section>
                <h1 className=" fw-bold">Manan Singh Sethi</h1>
                <p className="">This is a homepage on which I thought of having all these skills and projects sliding, but didnt have much time..</p>
                <Link to="/projects" className="btn btn-primary btn-lg" tabIndex="0">
                    View Projects
                </Link><p></p>
                <Link to="/about" className="btn btn-primary btn-lg" tabIndex="1">
                    Know About Me
                </Link>
            </section>
        </main>
    );
};

export default Home;
