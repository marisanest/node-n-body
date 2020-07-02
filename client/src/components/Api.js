const Api = () => {
    return {
        call: {
            data: async () => {
                const res = await fetch('/api/data');
                const body = await res.json();
                console.log(body.message)
                return body.data;
            },
            reload: async () => {
                const res = await fetch('/api/data/reload');
                const body = await res.json();
                console.log(body.message)
            },
        }
    }
}

export default Api;