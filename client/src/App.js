import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './components/Api'
import DataHandler from './components/DataHandler'
import Heading from './components/Heading'
import Plot from './components/Plot'

const api = Api()
const dataHandler = DataHandler()

const App = () => {
    const [index, setIndex] = useState(0)
    const [isFetched, setFetched] = useState(false)
    const [isReloading, setReloading] = useState(false);

    useEffect(() => {
        let timer;

        if (isFetched === true) {
            timer = setTimeout(() => {
                dataHandler.next()
                setIndex(index + 1)
            }, 2000)
        }

        return () => {
            if (isFetched === true)
                clearTimeout(timer)
        }
    }, [index, setIndex, isFetched])

    useEffect(() => {
        if (!isFetched) {
            api.call.data()
                .then((data) => {
                    dataHandler.setData(data)
                    setFetched(true)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [isFetched, setFetched])

    useEffect(() => {
        if (isReloading) {
            api.call.reload()
                .then(() => {
                    setReloading(false)
                    setFetched(false)
                })
                .catch((err) => {
                    console.error(err)
                });
        }
    }, [isReloading, setReloading]);

    const data = dataHandler.getData()
    const handleClick = () => setReloading(true);
    
    return (
        <div className="App">
            <Heading iteration={data.iteration + 1} isReloading={isReloading} handleClick={handleClick}/>
            <Plot data={data.data} />
        </div>
    );
}

export default App;
