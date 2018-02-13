import React, { Component } from 'react';

import { View } from 'react-native';
import Post from './Post';

import styles from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Xavier Teixeira',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Xavier Teixeira',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Xavier Teixeira',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Xavier Teixeira',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.posts.map(post => <Post key={post.id} post={post} />) }
      </View>
    );
  }
}
