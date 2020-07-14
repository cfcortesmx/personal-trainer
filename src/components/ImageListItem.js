import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Icon, Button, withStyles} from '@ui-kitten/components';

const AddIcon = (props) => (
  <Icon name="plus-square-outline" {...props} style={styles.icon} />
);

const ImageListItemComponent = (props) => {
  const {item, eva, style, ...restProps} = props;

  if (item.item.type === 'add') {
    return (
      <Button accessoryLeft={AddIcon} style={[eva.style.imageItem, style]} />
    );
  } else {
    return (
      <Image
        {...restProps}
        style={[eva.style.imageItem, style]}
        source={item.item.photo}
        resizeMode={'contain'}
      />
    );
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export const ImageListItem = withStyles(ImageListItemComponent, (theme) => ({
  imageItem: {
    width: 240,
    height: 240,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme['color-basic-300'],
  },
}));
