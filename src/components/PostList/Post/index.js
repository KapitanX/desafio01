import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const Post = ({ post: { title, author, text } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.line} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Post;
