import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
    return <div className="hello" onClick={() => console.log('alouuu')}>
        <Link to={'/home'}>Home</Link>
    </div>;
};

export default App;
