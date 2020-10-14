import PushNotification from 'react-native-push-notification'



const LocalNotification =({data})=>{
  let {name,url}=data;
     let  massage =name?name:"Test!"
  console.log(name,url)
  PushNotification.localNotification({
  bigPictureUrl: url, // (optional) default: undefined
  color: "red", // (optional) default: system default
  vibrate: true, // (optional) default: true
  vibration: 300,
  title: "Do you Want to Post on Facebook?", // (optional)
  message:massage, 
   })
}

export {LocalNotification};