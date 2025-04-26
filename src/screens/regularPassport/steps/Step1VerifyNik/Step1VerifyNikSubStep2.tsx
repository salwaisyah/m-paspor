import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';

type Step1VerifyNikSubStep2Props = {
  setSubStep: (val: number) => void;
};

const Step1VerifyNikSubStep2 = ({
  setSubStep,
}: Step1VerifyNikSubStep2Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <View style={styles.subStepTextWrapper}>
          <Text style={styles.subStepTitle}>Ambil/Upload Foto KTP Anda</Text>
          <Text style={styles.subStepDesc}>
            Pastikan pencahayaan cukup, tulisan pada identitas terlihat jelas,
            dan jangan gunakan foto dari Live Mode sebelum melanjutkan.
          </Text>
        </View>

        <View style={styles.documentImage} />

        <View style={styles.subStepButtonContainer}>
          <Button
            mode="contained"
            onPress={() => setSubStep(3)}
            style={styles.subStepButtonContained}
            textColor={Colors.neutral100.color}>
            Pilih Foto
          </Button>
          <Button
            mode="outlined"
            onPress={() => setSubStep(1)}
            style={styles.subStepButtonOutlined}
            textColor={Colors.primary30.color}>
            Ulangi
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1VerifyNikSubStep2;
