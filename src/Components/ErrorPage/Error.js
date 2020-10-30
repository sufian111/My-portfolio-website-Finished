import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>

            <main style={{ textAlign: 'center' }}>
                <h1>Sorry!</h1>
                <p>
                    Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
                </p>
                <Link to="/"><button>Home</button></Link>
            </main>
        </div>
    );
};

export default Error;