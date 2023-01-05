import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class loginScreen extends Component{
    signInWithGoogleAsync=async()=>{
        try{
            const result=await Google.longInAsync({
                behaviour:"web",
                androidClientId:
                "512716633783-rkrc8tpbrknrpnt0akjbqqo0v4ukafkc.apps.googleusercontent.com",
                iosClientId:
                "512716633783-n6qco4smqeh9g64ffalebfrsepq0nvlf.apps.googleusercontent.com",
                scopes:['profile','email'],
            });
        }
    }
}