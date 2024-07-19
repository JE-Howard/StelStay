import React from 'react';
import { ResponsiveLine } from '@nivo/line';

function MyLineChart() {
  const data = [
    {
        id: 'Growth Rate',
        data: [
            { y: 50, x: 'Jan' },
            { y: 62, x: 'Feb' },
            { y: 71, x: 'Mar' },
            { y: 69, x: 'Apr' },
            { y: 102, x: 'May' },
          // Add more data points for the desired range
        ],
    },
  ];


  return (
    <div style={{ height: '350px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 70, left: 60 }}
        xScale={{ type: 'point', min: 'auto', max: 'auto', reverse: true }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        curve="linear" // Use a linear curve for straight lines
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'left', // Change the orientation to left
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          orient: 'bottom', // Change the orientation to bottom
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: (value) => `${value}`,
        }}
        colors={{ scheme: 'set1' }}
        lineWidth={2}
        pointSize={6}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabelXOffset={12} // Adjust the horizontal position of point labels
        
        areaOpacity={0.3}
        useMesh={true}
      />
    </div>
  );
}

export default MyLineChart;
