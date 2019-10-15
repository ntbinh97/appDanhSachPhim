import React, {Component} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';


export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
          data: "",
          activeRowKey: null,
        }
      }
    getData(){
        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({data:responseJson.movies})
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });

       
    }
   
   
    componentDidMount(){
        this.getData();
    }
    render(){
       
        return(
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=>
                    <View style={styleHome.item}>
                        <Text>Tiêu đề: {item.title}</Text>
                        <Text>Năm Xuất bản: {item.releaseYear}</Text>
                    </View>
                    }
                />
            </View>
        )
    }
}

const styleHome = StyleSheet.create({
    item:{
        borderWidth:1
    }
})