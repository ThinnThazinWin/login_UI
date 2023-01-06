import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./Constants";
import Field from "./Field";
import Btn from './Btn';
//import { TouchableOpacity } from "react-native-gesture-handler";
export default function Signup(props) {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 52,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 400,
            borderTopLeftRadius: 100,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          {/*<Text style={{fontSize:40,color:darkGreen,fontWeight:'bold'}}></Text>
    <Text style={{color:'grey', fontSize:1,fontWeight:'bold',marginBottom:20}}>Login to your account</Text>*/}
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email/username" keyboardType={"email-address"} />
          <Field placeholder="contact Number" keyboardType={"number"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: 16,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 16,
                //fontWeight: "bold",
              }}
            >
              By signing in, you agree to our{""}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: 16,
              justifyContent: "center",
              marginBottom: 10,
              width:'78%'
            }}
          >
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                //fontWeight: "bold",
              }}
            >
              and {""}
            </Text>
            <Text
              style={{
                color: darkGreen,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              privacy policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert("Account created");
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({});
