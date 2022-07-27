import React from 'react';
import { FlatList, View , StyleSheet, Text, TextInput} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';




function ScreenA ({navigation}){

    const [text, onChangeText] = React.useState('');
    const [data, setData] = React.useState([]);

    // function pressHandler(){
    //     navigation .navigate('ScreenB',{} );
    // }

    function apiCall(){


        var url = 'https://pokeapi.co/api/v2/pokemon/';
        var finalurl = url+ text;
        console.log('=====url',finalurl);
        fetch (finalurl).then((response)=>   
        console.log('response===', response))
        .then((json)=> {
            console.log('json===', json);
            setData(json)} )
        .catch((error)=> console.error(error))
     
      
    }

    return(
        <View style={styles.container}>
            <TextInput
            value={text}
            onChangeText={onChangeText}
            style={ styles.textInput}
            />
           <Pressable 
           style={styles.button}
           onPress={apiCall} >
               <Text style={styles.text}>
                  Save
               </Text>
           </Pressable>
           <FlatList
           data= {data}
           keyExtractor={({id}, index)=> id }
           renderItem ={(item)=>{
               <Text> </Text>
           }

           }
           />

        </View>

    )

}


export default ScreenA;


const styles = StyleSheet.create({
container:{
    flex:1, 
    alignItems: 'center',
    backgroundColor: '#939393',
    justifyContent: 'center',

},
button:{
    backgroundColor: '#FFA1A1',
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',

},
text:{
    fontSize: 14,
},
textInput:{
    padding: 10,
width: 200,
height: 40,
marginBottom: 20,
backgroundColor: 'white',


}



});



