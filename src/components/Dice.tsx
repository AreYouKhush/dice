import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import DiceOne from '../assets/images/dice-six-faces-1.png';
import DiceTwo from '../assets/images/dice-six-faces-2.png';
import DiceThree from '../assets/images/dice-six-faces-3.png';
import DiceFour from '../assets/images/dice-six-faces-4.png';
import DiceFive from '../assets/images/dice-six-faces-5.png';
import DiceSix from '../assets/images/dice-six-faces-6.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Die = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image
        style={{height: 200, width: 200, borderRadius: 20}}
        source={imageUrl}
      />
    </View>
  );
};

const Dice = (): JSX.Element => {
  const [image, setImage] = useState<ImageSourcePropType>(DiceOne);
  const [yourRoll, setYourRoll] = useState(1);
  const [buttonActive, setButtonActive] = useState(true);
  const options = {
    enableVibrationFallback: true,
    ignoreAndroidSystemSettings: false
  }

  const dieIntervalAnim = () => {
    let myInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      changeDieImage(randomNumber);
    }, 100);
    setTimeout(() => {
      clearInterval(myInterval);
      setButtonActive(true);
    }, 1000);
  };

  const rollTheDie = () => {
    setButtonActive(false);
    dieIntervalAnim();
  };

  const changeDieImage = (randomNumber: number) => {
    switch (randomNumber) {
      case 1:
        setImage(DiceOne);
        setYourRoll(1);
        break;
      case 2:
        setImage(DiceTwo);
        setYourRoll(2);
        break;
      case 3:
        setImage(DiceThree);
        setYourRoll(3);
        break;
      case 4:
        setImage(DiceFour);
        setYourRoll(4);
        break;
      case 5:
        setImage(DiceFive);
        setYourRoll(5);
        break;
      case 6:
        setImage(DiceSix);
        setYourRoll(6);
        break;
      default:
        setImage(DiceOne);
    }
    ReactNativeHapticFeedback.trigger("impactLight", options)
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            You got: {yourRoll}
          </Text>
        </View>
        <View>
          <Die imageUrl={image} />
        </View>
        <TouchableOpacity
          onPress={rollTheDie}
          disabled={!buttonActive}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: '#012345',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Roll The Die</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dice;
