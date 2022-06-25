import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return <div className="hello" onClick={() => console.log('alouuu')}>
        <Link to={'/'}>root</Link>

    </div>;
};

export default Home;
