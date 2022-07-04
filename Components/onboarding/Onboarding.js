import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground, Image } from "react-native";
import { withTheme, Card, Text, Button, Paragraph, Title } from "react-native-paper";
import Dots from 'react-native-dots-pagination';
import * as Animatable from 'react-native-animatable';

class OnBoarding extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
        }
    }

    render(){
        const { theme, illustration, title, description, active, onNext } = this.props;

        return(
            <View>
                <Card style={styles(theme).card}>
                    <ImageBackground  source={require("../../assets/images/bg/onboarding.jpg")} style={styles(theme).bgImage}>
                        <Animatable.View
                            animation="fadeInRight"
                            duration={500}>
                            <View style={{ alignItems: "center" }}>
                                <Image 
                                    source={illustration}
                                    style={{margin: -80, resizeMode: 'contain', height: 600}}
                                />
                                <Title style={{ marginTop: -80, fontWeight: "bold", color: '#091E58' }}>{title}</Title>
                                <Paragraph style={{ textAlign:"center", padding: 25 }}>{description}</Paragraph>
                                
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Dots 
                                    length={3} 
                                    active={active} 
                                    activeColor={theme.colors.primary} 
                                    passiveColor={!theme.dark ? "#000" : "#fff"}
                                    paddingVertical={20}
                                />
                            </View>
                        </Animatable.View>
                    </ImageBackground>
                </Card>
                <View style={{ alignItems: 'center' }}>
                    <Button 
                        mode="contained"
                        color={theme.colors.secondary}
                        style={{ width: "70%", borderRadius: 20, marginTop: -25, padding: 6 }} 
                        onPress={() => onNext(parseInt(active) + 1)}>
                        <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>Suivant</Text>
                    </Button>
                </View>
                <Text style={ styles(theme).appNameText }>TOPLUM 1.0</Text>
            </View>
        )
    }

}

const styles = (theme) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    card: {
        paddingBottom: '20%',
        borderBottomLeftRadius: 22, 
        borderBottomRightRadius: 22,
        height: "87%",
        overflow: 'hidden'
    },
    appNameText: {
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 25,
    },
    bgImage: {
        width: "100%", 
        height: "108%",
        resizeMode: 'cover'
    },

});

export default withTheme(OnBoarding);