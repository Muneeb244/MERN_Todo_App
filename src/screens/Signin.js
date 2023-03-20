import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native";
import React from "react";

import welcomeLogo from "../../assets/welcomeLogo.png";
import Buttons from "../components/Buttons";

import form from "../styles/form";

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={welcomeLogo} />
        <View style={styles.login}>
          <Text style={form.header}>Login</Text>
          <Text style={form.subHeader}>Signin to continue</Text>
          <View style={form.mainC}>
            <Text style={[form.subHeader, { fontSize: 15 }]}>Email</Text>
            <TextInput style={form.input} placeholder="email" />
          </View>

          <View style={form.mainC}>
            <Text style={[form.subHeader, { fontSize: 15 }]}>Password</Text>
            <TextInput
              style={form.input}
              placeholder="Password"
              secureTextEntry
            />
            <View
              style={{ width: "100%", padding: 10, alignItems: "flex-end" }}
            >
              <Text style={form.sideText}>Forgot password?</Text>
            </View>
            <Buttons
              title="Login"
              height="22%"
              onPress={() => console.log("Clicked")}
            />
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={form.subHeader}>Don't have an account? </Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={form.sideText}>Create a new account</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    position: "absolute",
    top: 75,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  login: {
    paddingTop: 7,
    backgroundColor: "#fff",
    width: "100%",
    height: "55%",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
});