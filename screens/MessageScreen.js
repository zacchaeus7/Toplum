import React, { useState } from "react";
import { View, Text,StatusBar } from "react-native";
import ChatHeader from "../Components/messages/ChatHeader";
import ChatInput from "../Components/messages/ChatInput";
import MessagesList from "../Components/messages/MessagesList";



const MessageScreen = ({ navigation, route }) => {
	// const {  bio, picture, isBlocked, isMuted } = route.params;
  const username = {

  }
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	return (
		<View style={{ flex: 1 }}>
       <StatusBar translucent={true} backgroundColor={'transparent'}/>
			<ChatHeader
				onPress={() => {}}
				// username={username}
				// picture={picture}
				onlineStatus={'Online'}
			/>
      <MessagesList onSwipeToReply={swipeToReply} />
      
   
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username} />
		</View>
	);
};

export default MessageScreen;
