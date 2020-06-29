import React from "react";
import {ResponsiveScatterPlot} from "@nivo/scatterplot";
import colors from "../config/colors";

const styles = {
    container: {
        height: '85vh',
        width: '100vw',
        background: colors.primary
    },
}

const Plot = ({data = []}) => {
    return (
        <div style={styles.container}>
            <ResponsiveScatterPlot
                data={data}
                margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                xScale={{ type: 'linear', min: 0, max: 20 }}
                xFormat={function(e){return e}}
                yScale={{ type: 'linear', min: 0, max: 20 }}
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