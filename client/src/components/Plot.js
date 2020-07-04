import React from "react";
import {ResponsiveScatterPlot} from "@nivo/scatterplot";
import colors from "../config/colors";

const styles = {
    container: {
        height: '85vh',
        width: '100vw',
        margin: 0,
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: '5vh',
        paddingBottom: '5vh',
        background: colors.primary
    },
}

const Plot = ({data = []}) => {
    return (
        <div style={styles.container}>
            <ResponsiveScatterPlot
                data={data}
                margin={0}
                xScale={{ type: 'linear', min: -100, max: 100 }}
                xFormat={function(e){return e}}
                yScale={{ type: 'linear', min: -100, max: 100 }}
                yFormat={function(e){return e}}
                blendMode="normal"
                nodeSize={5}
                enableGridX={false}
                enableGridY={false}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                legends={[]}
                colors={['#ffffff']}
                motionStiffness={20}
                motionDamping={20}
            />
        </div>
    );
}

export default Plot;