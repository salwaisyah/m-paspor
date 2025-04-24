import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';

type Step1PersonalInfoSubStep1Props = {
  setSubStep: (val: number) => void;
};

const Step1PersonalInfoSubStep1 = ({
  setSubStep,
}: Step1PersonalInfoSubStep1Props) => {
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
        <View style={styles.documentImage}>
          <Text style={styles.documentImageSupportText}>Foto KTP</Text>
          <View
            style={[
              styles.documentImageCropped,
              {backgroundColor: Colors.neutral100.color},
            ]}
          />
        </View>
        <View style={styles.subStepButtonContainer}>
          <Button
            mode="contained"
            onPress={() => setSubStep(2)}
            style={styles.subStepButtonContained}
            textColor={Colors.neutral100.color}>
            Ambil Foto
          </Button>
          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.subStepButtonOutlined}
            textColor={Colors.primary30.color}>
            Upload Galeri
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Step1PersonalInfoSubStep1;
