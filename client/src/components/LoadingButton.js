import React, { useState, useEffect } from 'react';
import {Button} from "reactstrap";

const styles = {
    button: {
        float: 'right',
        fontSize: '1.1rem',
        fontWeight: 400,
    }
}

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

const LoadingButton = () => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="outline-light"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            style={styles.button}
        >
            {isLoading ? 'Loading…' : 'Roll a Dice'}
        </Button>
    );
}

export default LoadingButton;