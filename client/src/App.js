import React, { useState, useEffect } from 'react';
import './App.css';

import DataGenerator from './components/DataGenerator'
import Heading from './components/Heading'
import Plot from './components/Plot'

const dataGenerator = DataGenerator()

const App = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            dataGenerator.next()
            setIndex(index + 1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [index, setIndex])

    const data = dataGenerator.getData()

    return (
        <div className="App">
            <Heading iteration={data.iteration + 1}/>
            <Plot data={data.data} />
        </div>
    );
}

export default App;
