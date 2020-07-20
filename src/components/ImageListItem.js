import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Icon, Button, withStyles, useTheme} from '@ui-kitten/components';

const StarIcon = (props) => <Icon {...props} name="star" />;

const ImageListItemComponent = (props) => {
  const {item, eva, style, ...restProps} = props;
  const theme = useTheme();

  const AddIcon = (props) => (
    <Icon
      name="plus-square-outline"
      {...props}
      style={[props.style, eva.style.icon, style]}
      fill={theme['color-primary-default']}
    />
  );

  if (item.item.type === 'add') {
    return (
      <Button
        accessoryLeft={AddIcon}
        style={[eva.style.imageItem, style]}
        onPress={props.onPress}
      />
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

export const ImageListItem = withStyles(ImageListItemComponent, (theme) => ({
  imageItem: {
    width: 240,
    height: 240,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme['color-basic-300'],
  },
  icon: {
    width: 32,
    height: 32,
    color: '#000000',
  },
}));
