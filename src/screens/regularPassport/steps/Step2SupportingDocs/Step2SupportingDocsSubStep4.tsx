import React from 'react';
import {ScrollView, View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-paper';
import styles from '../styles';
import Colors from '../../../../../assets/styles/Colors';

type Step2SupportingDocsSubStep4Props = {
  setSubStep: (step: number) => void;
};

const Step2SupportingDocsSubStep4 = ({
  setSubStep,
}: Step2SupportingDocsSubStep4Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          onPress={() => setSubStep(3)}
          style={({pressed}) => [
            styles.subStepButtonBackWrapper,
            {
              transform: [{scale: pressed ? 0.99 : 1}],
              marginBottom: 8,
            },
          ]}>
          <Icon name="chevron-left" size={24} />
          <Text style={styles.subStepButtonBackText}>Kembali</Text>
        </Pressable>

        <View style={styles.subStepTextWrapper}>
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

export default Step2SupportingDocsSubStep4;
