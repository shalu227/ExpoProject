import { View , Text, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


function ScreenB ({navigation}){

    function pressHandler(){
        navigation.pop();
    }
    
    return(
        <View style={styles.container}>
           <Pressable 
           style={styles.button}
           onPress={pressHandler} >
               <Text style={styles.text}>
                   Go Back TO Screen
               </Text>
           </Pressable>
        </View>

    )

}


export default ScreenB;



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
        textAlign: 'center'
    }
    });
    
    
    
    