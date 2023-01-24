import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";

import Message from "./Message";

import { theme } from "../../theme";

const MessagesList = ({ onSwipeToReply }) => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: "12:00",
			content: "Bonjour Zach!",
		},
		{
			user: 1,
			time: "12:05",
			content: "Comment tu vas?",
		},
		{
			user: 1,
			time: "12:07",
			content: "Tout va bien ?",
		},
		{
			user: 0,
			time: "12:09",
			content: "Wehhhh, nous revoilà sur topLum. Mr Lebon va continuer",
		},
		{
			user: 0,
			time: "12:00",
			content: "Merci",
		},
		{
			user: 1,
			time: "12:05",
			content: "Bonsoir Mr Idriss",
		},
		{
			user: 0,
			time: "12:07",
			content: "Bonjour",
		},
		{
			user: 1,
			time: "12:09",
			content: "Bonjour",
		},
		{
			user: 0,
			time: "12:07",
			content: "Bonjour ",
		},
		{
			user: 1,
			time: "12:09",
			content: "Bonjour",
		},
		{
			user: 0,
			time: "12:09",
			content: "Bonjour",
		},
		{
			user: 1,
			time: "12:09",
			content: "Bonjour",
		},
	]);

	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}		
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;
