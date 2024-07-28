import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, FlatList } from 'react-native';
import { useUser } from '@clerk/clerk-expo';

const MODULES = Array.from({ length: 12 }, (_, index) => ({
  id: index.toString(),
  name: `Module ${index + 1}`,
  progress: Math.floor(Math.random() * 101), // Random progress for demonstration
}));

const ModuleItem = ({ module, isExpanded, onPress }) => {
  const [height] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(height, {
      toValue: isExpanded ? 100 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  return (
    <View style={styles.moduleContainer}>
      <TouchableOpacity onPress={onPress} style={styles.moduleHeader}>
        <Text style={styles.moduleTitle}>{module.name}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.moduleContent, { height }]}>
        <Text style={styles.moduleText}>Progress: {module.progress}%</Text>
        {/* Add more detailed information about the module here */}
      </Animated.View>
    </View>
  );
};

const Home = () => {
  const { user } = useUser();
  const [expandedModuleId, setExpandedModuleId] = useState(null);

  const handlePress = (id) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <FlatList
        data={MODULES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ModuleItem
            module={item}
            isExpanded={expandedModuleId === item.id}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  moduleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  moduleHeader: {
    backgroundColor: '#fff',
    padding: 16,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  moduleContent: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 16,
  },
  moduleText: {
    fontSize: 14,
  },
});

export default Home;
