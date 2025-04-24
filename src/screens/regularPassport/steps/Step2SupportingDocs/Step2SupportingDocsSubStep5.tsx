import React from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';
import styles from '../styles';
import TextInputComponent from '../../../../components/TextInput';
import Colors from '../../../../../assets/styles/Colors';

type Step2SupportingDocsSubStep5Props = {
  setSubStep: (step: number) => void;
};

const Step2SupportingDocsSubStep5 = ({
  setSubStep,
}: Step2SupportingDocsSubStep5Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => setSubStep(4)}
          style={({pressed}) => [
            styles.subStepButtonBackWrapper,
            {
              transform: [{scale: pressed ? 0.99 : 1}],
            },
          ]}>
          <Icon name="chevron-left" size={24} />
          <Text style={styles.subStepButtonBackText}>Kembali</Text>
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

export default Step2SupportingDocsSubStep5;
