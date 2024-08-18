import { useState, useCallback } from 'react';
import * as ImagePicker from 'expo-image-picker';

// 커스텀 훅 정의
export function useImagePicker() {
    const [image, setImage] = useState<string>();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            console.log(123);
        //   setImage(result.assets[0].uri);
        }
      };

  return {
    image,
    pickImage,
  };
}
