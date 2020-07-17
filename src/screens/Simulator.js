import React from "react";
import { StyleSheet, Text, View, Button, TouchableHighlight} from "react-native";
import * as firebase from "firebase";

function parseDate(date){
  // parse the date into the format dd-mm-yyyy
  day = String(date.getDate());
  month = date.getMonth() +1;
  if (month < 10){
      month = "0" + String(month);
  }
  else{
      month = String(month);
  }
  year = String(date.getFullYear());
  parsedDate = day + "-" + month + "-" + year;
  return parsedDate;
}


function incrementAndStore(currentDate, currentTodayVisits){
  currentTodayVisits += 1;
  firebase.database().ref(firebase.auth().currentUser.uid + "/visits").update({
    [currentDate] : currentTodayVisits,
    
  });
  return currentTodayVisits;
};
    
    function Simulator({navigation}){
      var currentDate = parseDate(new Date())
      var currentTodayVisits = 0;
        var userRef = firebase.database().ref(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        visits = snapshot.child('visits');
        
        visits.forEach(function(visit) {
          var key = visit.key;
          if (key === currentDate){
            currentTodayVisits = visit.val();
          }
          
       });
      });
    
    return (
      <View style={{flex: 1, flexDirection:'row'}}> 
      
        <TouchableHighlight style={styles.incrementButton}
          onPress = {() => {currentTodayVisits = incrementAndStore(currentDate, currentTodayVisits)}}>
          <Text style={{fontSize: 25, position: 'relative', top:'30%', left: '5%'}}>
            Click here to increment the number of visitors
          </Text>
        </TouchableHighlight>
      </View>
    );
    
}

const styles = StyleSheet.create({

  incrementButton: {
    position: "relative",
    top: '70%',
    left: '3.5%',
    width: "85%",
    height: '20%',
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

