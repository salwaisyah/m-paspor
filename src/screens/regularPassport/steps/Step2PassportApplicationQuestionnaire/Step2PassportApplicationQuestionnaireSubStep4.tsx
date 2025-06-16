import React from 'react';
import {ScrollView, View, Pressable, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';

type Step2PassportApplicationQuestionnaireSubStep4Props = {
  setSubStep: (step: number) => void;
};

const Step2PassportApplicationQuestionnaireSubStep4 = ({
  setSubStep,
}: Step2PassportApplicationQuestionnaireSubStep4Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            setSubStep(3);
          }}>
          <Button
            mode="contained"
            icon="chevron-left"
            textColor={Colors.neutral100.color}
            style={styles.subStepButtonBackContainer}>
            Kembali
          </Button>
        </Pressable>

        <View style={[styles.subStepTextWrapper, {marginTop: 12}]}>
          <Text style={styles.subStepTitle}>
            Ambil/Upload Foto Paspor Lama Anda (Halaman 2 Paspor)
          </Text>
          <Text style={styles.subStepDesc}>
            Pastikan pencahayaan cukup, tulisan pada identitas terlihat jelas,
            dan jangan gunakan foto dari Live Mode sebelum melanjutkan.
          </Text>
        </View>

        <View style={styles.documentImage} />

        <View style={styles.subStepButtonContainer}>
          <Button
            mode="contained"
            onPress={() => setSubStep(5)}
            style={styles.subStepButtonContained}
            textColor={Colors.neutral100.color}>
            Pilih Foto
          </Button>
          <Button
            mode="outlined"
            onPress={() => setSubStep(3)}
            style={styles.subStepButtonOutlined}
            textColor={Colors.primary30.color}>
            Ulangi
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep4;
