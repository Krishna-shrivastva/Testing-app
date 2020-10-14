import React, {useEffect,useState } from 'react'

import { Container, Content, Spinner,Form, Item, Input, Label } from 'native-base';



import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import Axios from 'axios';




const access_token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDAyNTUxOTIsImp0aSI6IkNmc0lJRmYxWm43TUNJdUJrS2pKVVEiLCJpc3MiOiJodHRwczpcL1wvcmVzb3VyY2VzLnZlZ2E2LmluZm9cLyIsIm5iZiI6MTYwMDI1NTIwMiwiZGF0YSI6eyJ1c2VyX2lkIjoiMSIsImFwcF91cmwiOiJOVWxsIn19.Y4UpB0--8kQWHFHrONhyJy_jGl3VmDZ93Y-qn7yD6tLZRmzktXeIf4YTdraNIMrYTucuVYLB6VrWVhN4TrZpaA'

export default function HomeScreen ({navigation}) {
  const [isApiData, setApiData] = useState('');
  const [isInput,setInput]=useState('')



  function InputHandle(searchItem){
    setInput(searchItem)

  }
  useEffect(() => {
    Axios.get(`https://resources.vega6.info/get-photo/search?keyword=${isInput}`, {
       headers: {
         'Authorization': `Bearer ${access_token}`
       }
     })
     .then((res) => {
       setApiData(res.data)    
     })
     .catch((error) => {
       console.error(error)
     })
   }, [isInput])

  if(isApiData){
    return (
      <View style={{flex: 1}}>
          <Form>
            <Item floatingLabel style={{marginTop:20,marginBottom:20}}>
              <Label>Search Image</Label>
              <Input onChangeText={InputHandle} />
            </Item>
          </Form>

          <SafeAreaView style={styles.container}>
      <FlatList
        data={isApiData.data}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
             <TouchableOpacity
              onPress={() => navigation.navigate('ImageView',{
                  "data":item
                })}>
            <Image
              style={styles.imageThumbnail}
              source={{uri:item.url}}
            />
             </TouchableOpacity>
          </View>
         
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
     
      </View>

    )
  }else{
    return(
   <Container style={{flex: 1,justifyContent:"center",alignItems:"center"}}>
        <Content>
          <Spinner color='blue' />
        </Content>
     </Container>
    )
  }

   
  }


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
