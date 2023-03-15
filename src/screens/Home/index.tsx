import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView,
        ScrollView,
        Text,
        View 
    } from 'react-native'
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json'
import categories from '../../data/categories.json'
import { useNavigation } from '@react-navigation/native';

export interface IData {
  id:           number;
  name:         string;
  city:         string;
  country:      string;
  entry_price:  string;
  address:      string;
  opening_time: string;
  closing_time: string;
  categories:   string[];
  images:       string[];
  coordinates:  Coordinates;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

const Home = ():JSX.Element => {

  const navigation = useNavigation()

  const [selectedCategory, setselectedCategory] = useState('All')
  const [data, setdata] = useState<any[]>([])

  const ALL = 'All'

  useEffect(() => {
    setdata(jsonData)
  }, [])

  useEffect(() => {
    if(selectedCategory === ALL){
      setdata(jsonData)
    }else{
      const filteredData = jsonData.filter(item => item?.categories.includes(selectedCategory))
      setdata(filteredData)
    }
  }, [selectedCategory])
  
  

  return (
    <SafeAreaView style={styles.container}>
            

            {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.row}>
              {
                data?.map((item, index) => (
                  <AttractionCard 
                    key={item.id}
                    style={index % 2 === 0 ? {marginRight: 12}: {}}
                    title={item.name}
                    subtitle={item.city}
                    imageSrc={item.images?.length ? item.images[0]: null}
                  />
                ))
              }
            </ScrollView> */}
            <FlatList 
              data={data}
              numColumns={2}
              style={{flexGrow: 1}}
              ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
              ListHeaderComponent={(
                <>
                  <Title text="Where do" style={{fontWeight: 'normal'}}/>
                  <Title text="you want to go"/>

                  <Title text="Explore Attractions" style={styles.subtitle} />
                  <Categories 
                    selectedCategory={selectedCategory} 
                    onCategoryPress={setselectedCategory}
                    categories={[ALL, ...categories]} 
                  />
                </>
              )}
              keyExtractor={(item) => String(item?.id)}
              renderItem={({item, index}) => (
                <AttractionCard 
                    key={item.id}
                    style={index % 2 === 0 ? {marginRight: 12}: {}}
                    onPress={() => navigation.navigate('AttractionDetails' as never, {item: item as never})}
                    title={item.name}
                    subtitle={item.city}
                    imageSrc={item.images?.length ? item.images[0]: null}
                  />
              )}
            />
    </SafeAreaView>
  )
}

export default Home;
