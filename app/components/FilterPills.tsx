import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FiltrationPills = ({onFilterChange}: {onFilterChange: any}) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filterTypes = ['all', 'basketball', 'soccer', 'tennis', 'volleyball', 'chess'];

  return (
        <ScrollView 
        contentContainerStyle={styles.container} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
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
                <Text style={styles.pillText}> {filterType} </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
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
    backgroundColor: '#c0c0c0',
    borderRadius: 20,
  },
  selectedPill: {
    backgroundColor: '#fc8a20',
  },
  pillText: {
    color: '#fff',
  },
});

export default FiltrationPills;