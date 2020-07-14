import React from 'react';
import {View} from 'react-native';
import {List} from '@ui-kitten/components';
import {ImageListItem} from './ImageListItem';

const photos = [
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep6.png')},
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep1.png')},
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep2.jpg')},
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep3.jpg')},
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep4.jpg')},
  {type: 'photo', photo: require('../../assets/exercise/bicep/bicep5.jpg')},
  {type: 'add'},
];

export const ImageList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const renderImageItem = (item) => {
    return <ImageListItem item={item} />;
  };

  return (
    <View>
      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={photos}
        renderItem={renderImageItem}
      />
    </View>
  );
};
