import React from 'react';
import {View, Alert} from 'react-native';
import {List} from '@ui-kitten/components';
import {ImageListItem} from './ImageListItem';
import ImagePicker from 'react-native-image-picker';

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
  const [thePhotos, setThePhotos] = React.useState(photos);

  const renderImageItem = (item) => {
    if (item.item.type === 'add') {
      return <ImageListItem item={item} onPress={imageGalleryLaunch} />;
    }

    return <ImageListItem item={item} />;
  };

  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res);
        Alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        thePhotos.splice(thePhotos.length - 1, 0, {
          type: 'photo',
          photo: source,
        });

        setThePhotos(thePhotos);
      }
    });
  };

  return (
    <View>
      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={thePhotos}
        renderItem={renderImageItem}
      />
    </View>
  );
};
