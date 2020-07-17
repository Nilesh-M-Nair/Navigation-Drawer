import * as React from 'react';
import { View,Text,StyleSheet,FlatList,ActivityIndicator, SafeAreaView } from 'react-native';
import { iOSColors } from 'react-native-typography';

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      ListEnd: false,
      Data: [],
      serverData: false,
    };
    this.offset = 1;
  }

  componentDidMount() {
    this.getData();
  }
   getData = () => {
    if (!this.state.serverData && !this.state.ListEnd) {

      this.setState({ serverData: true }, () => {
        fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + this.offset)

          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.results.length > 0) {
              this.offset = this.offset + 1;
              this.setState({
                Data: [...this.state.Data, ...responseJson.results],
                serverData: false,
              });
            } else {
              this.setState({
                serverData: false,
                ListEnd: true,
              });
            }
          })
          .catch(error => {
            console.error(error);
          });
      });
    }
  };
  renderFooter() {
    return (
      <View style={styles.footer}>
        {this.state.serverData ? (
          <ActivityIndicator color="white" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.Data}
            onEndReached={() => this.getData()}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {item.id}
                  {'.'}
                  {item.title.toUpperCase()}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={this.renderFooter.bind(this)}
          />
        )}
      </View>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: iOSColors.black
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: iOSColors.gray,
  },
  text: {
    fontSize: 15,
    color: iOSColors.white,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default FourthPage;