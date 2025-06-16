import React from 'react';
import {ScrollView, View, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep8Props = {
  setSubStep: (step: number) => void;
};

const Step2PassportApplicationQuestionnaireSubStep8 = ({
  setSubStep,
}: Step2PassportApplicationQuestionnaireSubStep8Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => setSubStep(7)}>
          <Button
            mode="contained"
            icon="chevron-left"
            textColor={Colors.neutral100.color}
            style={styles.subStepButtonBackContainer}>
            Kembali
          </Button>
        </Pressable>

        <View style={styles.subStepQuestionnaireOptionContainer}>
          <TextInputComponent
            title="Di mana tempat tinggal Anda di negara tujuan?"
            placeholder="Masukkan alamat"
            supportText="0/100 karakter"
            containerHeight={90}
            isMultiline
          />
        </View>

        <Button
          mode="contained"
          onPress={() => setSubStep(9)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep8;
