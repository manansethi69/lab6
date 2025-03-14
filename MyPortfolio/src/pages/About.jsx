import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">About Me</h1>
            <div className="row">

                <div className="col-md-6">
                    <p>
                        I am Manan Sethi, a 3rd year Applied Computer Science student who is passionate to start something on his own by utilizing the skills of computers and softwares.
                        I just wanna earn money :)
                    </p>
                </div>

                <div className="card p-3 shadow-sm">
                    <h2 className="card-title">Few of my skills:</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">MySQL</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;
