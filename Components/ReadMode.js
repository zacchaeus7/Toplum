import * as React from 'react';
import { View, Text } from 'react-native';
import ReadMore from 'react-native-read-more-text';

export class DescriptionCard extends React.Component {
  render() {
    let { text } = this.props;

    return (
      <View>
        <View style={styles.cardLabel}>
          <Text style={styles.cardLabelText}>
            Description
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardBody}>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              <Text style={styles.cardText}>
                {text}
              </Text>
            </ReadMore>
          </View>
        </View>
      </View>
    );
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  _handleTextReady = () => {
    // ...
  }
}