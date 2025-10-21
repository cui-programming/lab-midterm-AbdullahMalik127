import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';


export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');



  const filteredItems = items.filter((item) =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    const trimmed = newPhrase.trim();
    if (
      trimmed &&
      !items.some((item) => item.phrase.toLowerCase() === trimmed.toLowerCase())
    ) {
      const newItem = {
        id: Date.now().toString(),
        phrase: trimmed,
        count: 0,
      };
      setItems([...items, newItem]);
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.section}>
      {/* Search Box */}
      <TextInput
        placeholder="Search azkaar..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <View style={{ flexDirection: 'row', marginVertical: 10, gap: 8 }}>
        <TextInput
          placeholder="Add new phrase"
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={[styles.input, { flex: 1 }]}
        />
        <Button onPress={handleAdd}>Add</Button>
      </View>

      
      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemName}>{item.phrase}</Text>
        )}
      />
    </View>
  );
}
