import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';
import { RootStackParamList } from '../Navigation/Stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const validation = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").max(20, "Password cannot exceed 20 characters").required("Password is required")
});

const LogIn: React.FC<LogInScreenProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C67C4E" }}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validation}
          onSubmit={(values) => {
            Alert.alert("Login Successful", `Email: ${values.email}`);
          }}
        >
          {(prop) => (
            <View style={{ flex: 1, justifyContent: "center" }}>
              {/* <View style={styles.logoContainer}>
                <Image 
                  source={require("../../assets/tiplogo2.png")}
                  style={styles.logo}
                />
              </View> */}

              
              <View>
                <TextInput
                  label="Enter Email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={prop.values.email}
                  onBlur={prop.handleBlur("email")}
                  onChangeText={prop.handleChange("email")}
                  left={<TextInput.Icon icon="account" color="black" />}
                  mode="outlined"
                  activeOutlineColor="black"
                />
                {prop.touched.email && prop.errors.email && (
                  <Text style={styles.errorText}>{prop.errors.email}</Text>
                )}
              </View>

             
              <View>
                <TextInput
                  activeOutlineColor="black"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  onBlur={prop.handleBlur("password")}
                  secureTextEntry={!passwordVisible}
                  label="Enter Password"
                  value={prop.values.password}
                  onChangeText={prop.handleChange("password")}
                  left={<TextInput.Icon icon="form-textbox-password" color="black" />}
                  right={
                    <TextInput.Icon 
                      icon={passwordVisible ? "eye-off" : "eye"} 
                      onPress={() => setPasswordVisible(!passwordVisible)} 
                      color="black" 
                    />
                  }
                  mode="outlined"
                />
                {prop.touched.password && prop.errors.password && (
                  <Text style={styles.errorText}>{prop.errors.password}</Text>
                )}
              </View>

             
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

           
              <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
                <FontAwesomeIcon icon={faArrowRight} size={16} color="white" />
              </TouchableOpacity>

             
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account?</Text>
                <TouchableOpacity>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#fff",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "black",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 15,
  },
  btnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    padding: 6,
    marginBottom: 5,
    color: "black",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#333",
  },
  signUpLink: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  errorText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});

export default LogIn
