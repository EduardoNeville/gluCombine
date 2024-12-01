// TimeSeriesChart.tsx
import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import colors from '../../types/colors';

const windowWidth = Dimensions.get('window').width;

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [400, 300, 500, 200, 700, 600],
      color: (opacity = 1) => colors.primary, // Line color
      strokeWidth: 2,
    },
  ],
};

const TimeSeriesChart: React.FC = () => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}> Glucoseformer Prediction </Text>
      <Text style={styles.chartText}> Glucoseformer Gradient </Text>
      <LineChart
        data={chartData}
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
    fontSize: 15,
    color: colors.text,
    marginBottom: 10,
  },
  chartText: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 10,
  },

  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default TimeSeriesChart;
