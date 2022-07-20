import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground, Image } from "react-native";
import { withTheme, Card, Text, Button, Paragraph, Title } from "react-native-paper";
import Dots from 'react-native-dots-pagination';
import * as Animatable from 'react-native-animatable';
import Onboarding from "../Components/onboarding/Onboarding";

class OnBoardingScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeScreen: 0,
            screens: {
                first: {
                    title: "Communauté",
                    description: "Rejoindre topLum c'est rejoindre ses amis de toujours, ses futures amis et ses futures clients.",
                    illustration: require('../assets/images/onboarding/1.webp'),
                },
                second: {
                    title: "𝗟𝗼𝗿𝗲𝗺 𝗱𝗼𝗹𝗼𝗿",
                    description: "Adherer à la communauté d'anciens et nouveaux etudiants de votre université",
                    illustration: require('../assets/images/onboarding/o1.png'),
                    
                },
                third: {
                    title: "𝗦𝘂𝗺 𝗗𝗼𝗹𝗼𝗿",
                    description: "Se faire connaitre, promouvoir ses activités et nouer des relations etroites avec ceux qui oeuvrent dans notre domaine",
                    illustration: require('../assets/images/onboarding/1.jpg'),

                }
            }
        }
    }

    onNext = (screenIndex) => { 
        screenIndex !== 3 && this.setState({ activeScreen: screenIndex });
        screenIndex == 3 && this.props.navigation.navigate("Login");
    }

    renderActiveScreen = (screenIndex) => {

        let nextScreen = null;

        switch (screenIndex) {
            case 0:
                nextScreen = <Onboarding 
                    title={this.state.screens.first.title}
                    description={this.state.screens.first.description}
                    illustration={this.state.screens.first.illustration}
                    active={0}
                    onNext={this.onNext} />
                break;
        
            case 1:
                nextScreen = <Onboarding 
                    title={this.state.screens.second.title}
                    description={this.state.screens.second.description}
                    illustration={this.state.screens.second.illustration}
                    active={1}
                    onNext={this.onNext} />
                break;
        
            case 2:
                nextScreen = <Onboarding 
                    title={this.state.screens.third.title}
                    description={this.state.screens.third.description}
                    illustration={this.state.screens.third.illustration}
                    active={2}
                    onNext={this.onNext} />
                break;
        
            default:
                break;
        }

        return nextScreen;

    }

    render(){
        const { theme } = this.props;

        return(
            <View style={styles(theme).container}>
                <StatusBar backgroundColor={theme.colors.primary} />
                {this.renderActiveScreen(this.state.activeScreen)}
            </View>
        )
    }

}

const styles = (theme) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    }
});

export default withTheme(OnBoardingScreen);