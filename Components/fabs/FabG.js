import  React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const FabG = () => {


  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const navigation = useNavigation();

  const { open } = state;

  return (
    <Provider>
      <Portal
        
      >
        
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            
            { icon: 'plus', 
            onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Publier Sur TopLum',

              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Publier dans la communauty',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Rejoindre la communauty',
              onPress: () => navigation.navigate("JoinCommunityScreen"),
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
        position: 'absolute',
        backgroundColor:"#fd8500",
        margin: 16,
        right: 0,
        bottom: 0,
      },
})