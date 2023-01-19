import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FiltrationPills = ({onFilterChange}: {onFilterChange: any}) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filterTypes = ['all', 'restaurant', 'bar', 'cafe'];

  return (
    <View style={styles.container}>
      {filterTypes.map((filterType) => (
        <TouchableOpacity
          key={filterType}
          style={[
            styles.pill,
            selectedFilter === filterType && styles.selectedPill,
          ]}
          onPress={() => {
            setSelectedFilter(filterType);
            onFilterChange(filterType);
          }}
        >
          <Text style={styles.pillText}>{filterType}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  selectedPill: {
    backgroundColor: '#007aff',
  },
  pillText: {
    color: '#fff',
  },
});

export default FiltrationPills;