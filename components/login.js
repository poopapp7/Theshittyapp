import React from "react"
import { StyleSheet, Text, View, Image, Button, TextInput} from "react-native"
import Home from '../screens/HomeScreen.js';
export {accountName, accountEmail};

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      email:"",
      text: ""
    }
  }  
  signIn = async () => {
    try {
      console.log('Starting Async');
      const result = await Expo.Google.logInAsync({
        iosClientId: "621261529250-4cnd3rimd23f882h8jkp3dvgmlv1clo3.apps.googleusercontent.com",
        //iosClientIdReversed:"com.googleusercontent.apps.621261529250-p2045ep3a47uc81t936dqnks6jv2khnd",
        //androidClientId: "621261529250-99jlkplt6e5l1ncjei2b9ohodpta5evg.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })
      console.log(result);
      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign In with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const accountName = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}
const accountEmail = props => {
  return (
    <View>
      <Text>{props.email}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"

  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})