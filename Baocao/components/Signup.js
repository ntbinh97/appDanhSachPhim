import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            email:"",
            err:''
        }
      }
      Signup = ()=>{
          console.log(this.state.email);
          
        fetch('http://192.168.1.7/baocao/dangky.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }),
        })
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([res, data]) => {
            if(res==200){
                
                this.props.navigation.navigate('Login',{userdata:data});
            }else{
                Alert.alert("Thông Báo", "Đăng nhập thất bại!");
            }
            
          })
          .catch(error => {
            console.error(error);
            return { name: "network error", description: "" };
        });
        
    }
    render(){
        return(
            <View style={styleSignup.wrap} >
                <Text style={{color:'red',width:'100%',textAlign:"center"}}>{this.state.err}</Text>
                <View>
                    <TextInput
                        name="username"
                        onChangeText={(text)=>this.setState({username:text})}
                        style={styleSignup.input} placeholder="Tên đăng nhập"
                    />
                    <TextInput 
                        name="password"
                        onChangeText={(text)=>this.setState({password:text})}
                        style={styleSignup.input} placeholder="Mật khẩu"/>
                        <TextInput 
                        name="Email"
                        onChangeText={(text)=>this.setState({email:text})}
                        style={styleSignup.input} placeholder="Email"/>
                    
                </View>
                <TouchableOpacity
                    style={styleSignup.button}
                    onPress={this.Signup}
                >
                    <Text style={{color:"white"}}>Đăng ký</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styleSignup = StyleSheet.create({
    wrap:{
        flex:1,
        alignContent:"center",
        
    },
    input:{
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:"black",
    },
    button:{
        marginTop:10,
        height:40,
        alignItems:"center",
        width:'100%',
        justifyContent:"center",
        backgroundColor:"red",
        
    }
})