import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image , TouchableHighlight, ActivityIndicatorComponent} from "react-native";
import * as firebase from "firebase";


//export default class SensorSimulator extends React.Component {
  //state = { email: "", password: "", errorMessage: null };
  /*handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Benvenuto!");
        this.props.navigation.navigate("Home");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };*/
  function incrementAndStore(dailyVisits, monthlyVisits, name, number, actname, actdesc){

    dailyVisits = parseInt(dailyVisits) + 1;
    monthlyVisits = parseInt(monthlyVisits) + 1;
    firebase.database().ref(firebase.auth().currentUser.uid).set({
      thismonthvisits: monthlyVisits,
      todayvisits: dailyVisits,
      Name: name,
      Number: number,
      activityname: actname, 
      activitydescription: actdesc
    });

    return [dailyVisits, monthlyVisits];
    

  };
    
    function Simulator({navigation}){


    var userRef = firebase.database().ref(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        const userObj = snapshot.val();
        this.activitydescription = userObj.activitydescription;
        this.activityname = userObj.activityname;
        this.Name = userObj.Name;
        this.Number = userObj.Number;
        this.todayvisits = userObj.todayvisits;
        this.thismonthvisits = userObj.thismonthvisits;
      });

    return (
      <View>
        
        <TouchableHighlight
          style={styles.incrementButton}
          onPress = {() => {temp = incrementAndStore(this.todayvisits, this.thismonthvisits, this.Name, this.Number, this.activityname, this.activitydescription)
          
                            this.todayvisits = temp[0]
                            this.thismonthvisits = temp[1]
                            
          }

        }
        
        >
          <Text
            style={{ position: "absolute", left: 20, top: 10, fontSize: 20 }}
          >
            Click here to increment the number of visitors
          </Text>
        </TouchableHighlight>
      </View>
    );
    
}

const styles = StyleSheet.create({

  incrementButton: {
    position: "absolute",
    top: 280,
    left: 60,
    width: "80%",
    height: 150,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "green",
  },


  dataView:{
    flex:0.12,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
},
FieldTypeText1: {
    position: 'absolute',
    top: 215,
    left: 20,
    fontSize:20,
    color: 'grey'
},
FieldText1: {
    position: 'absolute',
    top: 215,
    left: 220,
    fontSize:20,
    fontFamily: 'sans-serif'
},


FieldTypeText2: {
  position: 'absolute',
  top: 315,
  left: 20,
  fontSize:20,
  color: 'grey'
},
FieldText2: {
  position: 'absolute',
  top: 315,
  left: 220,
  fontSize:20,
  fontFamily: 'sans-serif'
}


});



export default Simulator;

