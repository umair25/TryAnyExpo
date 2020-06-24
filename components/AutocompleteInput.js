import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import films from "./pk.json";
class AutocompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      query: ""
    };
  }
  componentWillMount() {
    this.setState({ films });
  }

  findFilm(query) {
    if (query === "") {
      return [];
    }

    const { films } = this.state;
    a = query.toString();
    const regex = new RegExp(`${a.trim()}`, "i");
    return films.filter(film => film.city.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    var films = this.findFilm(query);
    const comp = (a, b) =>
      a
        .toString()
        .toLowerCase()
        .trim() ===
      b
        .toString()
        .toLowerCase()
        .trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={films.length === 1 && comp(query, films[0].city) ? [] : films}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Star  film title"
          renderItem={({ item, i }) => (
            <ScrollView>
              <TouchableOpacity
                style={styles.descriptionContainer}
                onPress={() => {
                  this.setState({ query: item });
                }}
              >
                <Text style={styles.itemText}>{item.city}</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        />
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer1}
          data={films.length === 1 && comp(query, films[0].city) ? [] : films}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Star  film title"
          renderItem={({ item, i }) => (
            <ScrollView>
              <TouchableOpacity
                style={styles.descriptionContainer}
                onPress={() => {
                  this.setState({ query: item });
                }}
              >
                <Text style={styles.itemText}>{item.city}</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        />
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
        <View>
          <Text>UUUUU</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 40,
    zIndex: 1
  },
  autocompleteContainer1: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 140,
    zIndex: 1
  }
});

export default AutocompleteInput;
