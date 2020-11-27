import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import * as Speech from "expo-speech";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: "",
			displayText: "",
		};
	}

	render() {
		return (
			<View>
				<Header
					backgroundColor={"#34abeb"}
					centerComponent={{
						text: "Monkey Chunkey",
						style: { color: "#FFF", fontSize: 20 },
					}}
				/>
				<View style={{ paddingTop: 50 }}>
					<TextInput
						style={{
							width: 250,
							height: 40,
							borderWidth: 2,
							alignSelf: "center",
							alignItems: "center",
							textAlign: "center",
						}}
						onChangeText={(text) => this.setState({ text: text })}
						value={this.state.text}
					/>
					<TouchableOpacity
						style={{
							marginTop: 10,
							paddingLeft: 50,
							paddingRight: 50,
							paddingTop: 5,
							paddingBottom: 5,
							borderWidth: 3,
							backgroundColor: "#a972fc",
							alignSelf: "center",
							alignItems: "center",
						}}
						onPress={() => {
							var thingToSay = this.state.text;
							Speech.speak(thingToSay);
						}}>
						<Text style={{ fontSize: 21 }}> GO </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
