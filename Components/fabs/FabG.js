import  React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider,Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FabG = (currentCommunity) => {

  console.log(currentCommunity)

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const navigation = useNavigation();

  const { open } = state;

  return (
    <Provider>
      <Portal>
       
        <FAB.Group
        style={styles.fab}
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            
            { icon: 'plus', 
            onPress: () => console.log('Pressed add') },
            {
              icon: 'email',
              label: 'Faire une publication',
              onPress: () => navigation.navigate("MakePostScreen"),
            },
            {
              icon: 'bell',
              label: 'Rejoindre la communauty',
              onPress: () => navigation.navigate("JoinCommunityScreen",{currentCommunity:currentCommunity}),
            },
            
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            } 
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FabG;

const styles = StyleSheet.create({
    fab: {
        // position: 'absolute',
        // backgroundColor:"#fd8500",
        // margin: 16,
        right: 0,
        bottom: 0,
      },
})