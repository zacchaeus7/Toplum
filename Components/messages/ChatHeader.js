import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/EvilIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import { theme } from "../../theme";

const ChatHeader = ({  }) => {
	// const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} onPress={()=>{}}>
				<Icon name="user" size={70} color={theme.colors.white} />
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					{/* <Image style={styles.image} source={{ uri: picture }} /> */}
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>Mon service de test</Text>
						<Text style={styles.onlineStatus}>En ligne</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.options}>
					<TouchableOpacity
						onPress={() => navigation.navigate("OnCallScreen", {
						// 	username: username,
						// 	picture: picture
						})}
						style={{ paddingHorizontal: 5 }}
					>
						<Zocial
							name="call"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
					{/* <TouchableOpacity style={{ paddingHorizontal: 20 }}>
						<Icon
							name="ellipsis-v"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity> */}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: theme.colors.primary,
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	username: {
		color: theme.colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: theme.colors.white,
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;
