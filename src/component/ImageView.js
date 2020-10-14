import React, { Component,useEffect,useState,useRef } from 'react';
import { Image,Platform  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {LocalNotification} from '../Notification'


export default function ImageView({ route, navigation }) {
  const { data} = route.params;
  
      return (
        <Container>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: data.Thumbnail?data.Thumbnail:data.url}} />
                  <Body>
                     <Text>{data.name?data.name:data.source}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: data.url?data.url:data.Thumbnail}} style={{height: 400, width: null, flex: 1}}/>
              </CardItem>
              <CardItem cardBody style={{marginRight:"auto",marginLeft:"auto" ,marginTop:20,marginBottom:20}}>
                <Button onPress={()=>LocalNotification({data})}><Text>Send Push Notifaction </Text></Button>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
}

