import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            err:''
        }
      }
    
    login = ()=>{
        console.log(this.state.username);
        
        fetch('http://192.168.1.7/baocao/dangnhap.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        }),
        })
        .then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
        })
        .then(([res, data]) => {
            if(res==200){
                
                this.props.navigation.navigate('Home',{userdata:data});
            }else{
                Alert.alert("Thông Báo", "Đăng nhập thất bại!");
            }
            
          })
          .catch(error => {
            console.error(error);
            return { name: "network error", description: "" };
        });
        
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <View style={styleLogin.wrap} >
                <Text style={{color:'red',width:'100%',textAlign:"center"}}>{this.state.err}</Text>
                <View>
                    <TextInput
                        name="username"
                        onChangeText={(text)=>this.setState({username:text})}
                        style={styleLogin.input} placeholder="Tên đăng nhập"
                    />
                    <TextInput 
                        name="password"
                        onChangeText={(text)=>this.setState({password:text})}
                        style={styleLogin.input} placeholder="Mật khẩu"/>
                    
                </View>
                <TouchableOpacity
                    style={styleLogin.button}
                    onPress={this.login}
                >
                    <Text style={{color:"white"}}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styleLogin.button}
                    onPress={()=>{this.props.navigation.navigate('Signup')}}
                >
                    <Text style={{color:"white"}}>Đăng Ký</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styleLogin = StyleSheet.create({
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