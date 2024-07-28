// Profile.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { PieChart } from 'react-native-chart-kit';

// Define the dimensions for the chart
const { width } = Dimensions.get('window');

// Define TypeScript types for the chart data
interface ChartData {
  name: string;
  percentage: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

const Profile: React.FC = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  // Example data for the pie chart with 12 modules labeled as Module 1, Module 2, etc.
  const chartData: ChartData[] = [
    { name: 'Module 1', percentage: 10, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 2', percentage: 8, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 3', percentage: 7, color: '#ffce56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 4', percentage: 6, color: '#4bc0c0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 5', percentage: 5, color: '#9966ff', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 6', percentage: 9, color: '#ff9f40', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 7', percentage: 12, color: '#ffcd56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 8', percentage: 6, color: '#c9cbcf', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 9', percentage: 5, color: '#e7e9ed', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 10', percentage: 7, color: '#a4de02', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 11', percentage: 8, color: '#ff7f50', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Module 12', percentage: 8, color: '#7b68ee', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  const onSaveUser = async () => {
    try {
      // Update user details
      const result = await user.update({
        firstName,
        lastName,
      });
      console.log('🚀 ~ file: Profile.tsx:16 ~ onSaveUser ~ result:', result);
    } catch (e) {
      console.log('🚀 ~ file: Profile.tsx:18 ~ onSaveUser ~ e', JSON.stringify(e));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>
        Good morning {user.firstName} {user.lastName}!
      </Text>

      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.inputField}
      />
      <Button onPress={onSaveUser} title="Update account" color={'#6c47ff'} />

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Module Performance</Text>
        <PieChart
          data={chartData}
          width={width - 40} // Adjust width based on screen size
          height={220} // Adjust height as needed
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2, // Optional, default 3
            barPercentage: 0.5,
          }}
          accessor="percentage"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  greeting: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputField: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Profile;


