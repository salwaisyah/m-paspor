import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep5Props = {
  setSubStep: (step: number) => void;
};

const Step2PassportApplicationQuestionnaireSubStep5 = ({
  setSubStep,
}: Step2PassportApplicationQuestionnaireSubStep5Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            setSubStep(4);
          }}>
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
            title="Nomor paspor lama Anda"
            placeholder="Masukkan nomor paspor lama Anda"
          />
          <View>
            <View style={styles.textInputBulletTextWrapper}>
              <Text style={styles.textInputSupportText}>•</Text>
              <Text style={styles.textInputSupportText}>
                Nomor paspor lama minimal 7 karakter
              </Text>
            </View>
            <View style={styles.textInputBulletTextWrapper}>
              <Text style={styles.textInputSupportText}>•</Text>
              <Text style={styles.textInputSupportText}>
                Tulis nomor paspor tanpa menggunakan spasi. Contoh: B12345678
              </Text>
            </View>
          </View>
        </View>

        <Button
          mode="contained"
          onPress={() => setSubStep(6)}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep5;
