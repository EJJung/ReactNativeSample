import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View, Button, Image } from 'react-native';
import { shuffleArray } from './Shuffle';
import  * as iSchoolData from './iSchoolData';
import { getISchools } from './iSchoolData';


let iSchools = iSchoolData.getISchools();
// let mostiSchools = iSchools[0];
// let uOfM = iSchools[1][0];
// let initialOrder = mostiSchools.unshift(uOfM);

// console.log(mostiSchools);
// console.log(uOfM);
// console.log(initialOrder);

//create new component**

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      schoolRanking: iSchools,
      time: new Date().toLocaleString('en-US'),
    }
  }
  
  updateEve = () => {
    let newTime = new Date().toLocaleString('en-US');
    let newRanking = shuffleArray(this.state.schoolRanking.slice());
    this.setState({
      time: newTime,
      schoolRanking: newRanking
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerArea}>
          <View style={styles.headerLeft}>
           <Text style={styles.headerTitle}>iSchool Rankings</Text>
           <Text style={styles.headerSub}>Updated:{this.state.time}</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={this.updateEve}>
              <Image source={require('./gold-medal.svg')}
            style = {{ width: 40, height: 40,}}
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyArea}>
          <FlatList
            data={this.state.schoolRanking}
            renderItem={({item, index}) =>
             <View style={styles.itemContainer}>
               <View style={styles.itemK}>
                 <Text styles={styles.itemKText}>{index+1}</Text>
               </View>
               <View style={styles.itemContent}>
                 <Text numberOfLines={1} style={styles.itemUniv}>{item.univ}</Text>
                 <Text numberOfLines={1} style={styles.itemSchool}>{item.school}</Text>
               </View>
             </View>

            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerArea: {
    paddingTop: 10,
    flex: 0.20,
    backgroundColor: '#344460',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
  },
  headerSub: {
    color: 'white',
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  bodyArea: {
    flex: 0.8,
    backgroundColor: 'white',
  },
  //왼오른 둘다 합친거
  itemContainer: {
    flexDirection: 'row',
  },
  //number list on the left side
  itemK: {
    paddingStart: 20,
    paddingTop: 15,
    flex: 0.1,
  },
  itemKText: {
    fontSize: 15,
  },
  //학교 이름/스쿨 오른쪽
  itemContent: {
    flex: 0.9,
    paddingTop: 10,
    paddingEnd: 10,
  },
  itemUniv: {
    fontSize: 16,
    color: 'darkblue',
    fontWeight: 'bold',
  },
});
