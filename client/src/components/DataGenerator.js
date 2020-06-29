import data from "../data/data.json";

const DataGenerator = () => {
    let iteration = 0

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
    }
}

export default DataGenerator;