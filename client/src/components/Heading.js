import React from "react";
import colors from "../config/colors";
import LoadingButton from "./LoadingButton";

const styles = {
    container: {
        height: '15vh',
        width: '100vw',
        background: colors.primary,
        margin: 0,
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: '5vh',
        textAlign: 'center',
    },
    text: {
        fontWeight: 400,
        color: colors.gray
    },
    number: {
        color: colors.white,
        fontWeight: 900
    }
}

const Heading = ({iteration = null, isReloading = null, handleClick = null}) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.text}>
                Iteration:{' '}
                <strong style={styles.number}>{iteration}</strong>
                <LoadingButton isReloading={isReloading} handleClick={handleClick}/>
            </h2>
        </div>
    );
}

export default Heading;
