// TimeSeriesChart.tsx
import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import colors from '../../types/colors';

const windowWidth = Dimensions.get('window').width;

const chartData = [
  {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [100, 110, 115, 110, 105, 110],
        color: (opacity = 1) => colors.primary, // Line color
        strokeWidth: 2,
      },
    ],
  },

  {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        data: [100, 110, 115, 110, 105, 110],
        color: (opacity = 1) => colors.error, // Line color
        strokeWidth: 2,
      },
    ],
  },
];


interface TimeSeriesChartProps {
  useFirstEntry: boolean;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ useFirstEntry }) => {
  const dataToUse = useFirstEntry ? chartData[0] : chartData[1];
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}> Glucoseformer Prediction </Text>
      <Text style={styles.chartText}> Glucoseformer Gradient </Text>
      <LineChart
        data={dataToUse}
        width={windowWidth * 0.95}
        height={300}
        chartConfig={{
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 0,
          color: (opacity = 1) => colors.primary,
          labelColor: (opacity = 1) => colors.text,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: colors.primary,
          },
          propsForBackgroundLines: {
            stroke: colors.surface,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 30,
    color: colors.text,
    marginBottom: 10,
  },
  chartText: {
    fontSize: 20,
    color: colors.text,
    marginBottom: 10,
  },

  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default TimeSeriesChart;
