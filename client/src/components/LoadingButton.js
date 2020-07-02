import React from 'react';
import {Button} from 'reactstrap';

const styles = {
    button: {
        float: 'right',
        fontSize: '1.2rem',
        fontWeight: 400,
    }
}

const LoadingButton = ({isReloading = null, handleClick = null}) => {
    return (
        <Button
            variant="outline-light"
            disabled={isReloading}
            onClick={!isReloading ? handleClick : null}
            style={styles.button}>
            {isReloading ? 'Reloading…' : 'Reload data'}
        </Button>
    );
}

export default LoadingButton;