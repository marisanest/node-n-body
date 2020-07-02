const DataHandler = () => {
    let iteration = 0
    let data = [[]]

    return {
        next: () => {
            if (iteration === data.length - 1)
                iteration = 0
            else
                iteration++
        },
        getData: () => {
            return {iteration: iteration, data: data[iteration]}
        },
        setData: (newData) => {
            data = newData
            iteration = 0
        }
    }
}

export default DataHandler;