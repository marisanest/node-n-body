import React from "react";
import colors from "../config/colors";
// import LoadingButton from "./LoadingButton";

const styles = {
    container: {
        height: '15vh',
        width: '100vw',
        background: colors.primary,
        margin: 0,
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: '5vh',
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

const Heading = ({iteration = null}) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.text}>
                Iteration:{' '}
                <strong style={styles.number}>{iteration}</strong>
                {/*<LoadingButton />*/}
            </h2>
        </div>
    );
}

export default Heading;
