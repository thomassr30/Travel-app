import React from 'react'
import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const Categories = ({categories, selectedCategory, onCategoryPress}: any) => {
    console.log(categories)
  return (
    <FlatList 
        data={categories} 
        horizontal={true}
        style={{marginRight: -32}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        renderItem={({item}):any => {
            const selected = selectedCategory === item;
            return (
                <TouchableOpacity onPress={() => onCategoryPress(item)} style={[styles.itemContainer, selected === item ? styles.selectedItemContainer : {}]}>
                    <Text style={[styles.item, selectedCategory === item ? styles.selectedItem : {}]}>{item}</Text>
                </TouchableOpacity>
            )
        }}
    />
  )
}

export default React.memo(Categories)
