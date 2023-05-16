import {View, Text, Button, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

export default function PicScreen() {
  const [imageData, setImageData] = useState(null);
  const [refPath, setRefPath] = useState();
  const [downloaduri, setDownloadUri] = useState('');

  const pickimage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      console.log(response);
      setImageData(response);
    } catch (error) {}
  };

  const uploadimage = async () => {
    try {
      const response = storage().ref(`/images/${imageData.name}`);

      const put = await response.putFile(imageData.fileCopyuri);

      setRefPath(put.metadata.fullPath);

      const url = await response.getDownloadURL();

      setDownloadUri(url);

      Alert.alert('Image uploaded successfully');
    } catch (error) {}
  };

  const deleteimage = async () => {
    try {
      const response = await storage().ref(refPath).delete();
      console.log(response);
    } catch (error) {}
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {imageData ? (
        <Image
          source={{uri: imageData.uri}}
          style={{height: 100, width: 100, marginBottom: 20}}
        />
      ) :  <Text style={{color: 'black'}}>Please select an image </Text>}

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Button title="Select Image" onPress={() => pickimage()} />
        <Button title="Upload Image" onPress={uploadimage} />
        <Button title="Delete Image" onPress={() => deleteimage()} />
      </View>
      <View >
        <Text style={{color: 'black'}}>
          url = {downloaduri.length > 0 ? downloaduri : 'not found'}
        </Text>
      </View>
    </View>
  );
}
