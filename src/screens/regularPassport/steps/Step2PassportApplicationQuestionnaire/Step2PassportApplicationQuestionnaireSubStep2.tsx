import React from 'react';
import {ScrollView, View, Pressable, Text} from 'react-native';
import {Button} from 'react-native-paper';
import previousPassportConditionOptions from '../../../../data/Options/PreviousPassportConditionOptions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../../assets/styles/Colors';
import RadioButtonOptionComponent from '../../../../components/RadioButtonOption';
import styles from '../styles';

type Step2PassportApplicationQuestionnaireSubStep2Props = {
  setSubStep: (step: number) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  showPassportInfoDialog: () => void;
  showLostOrDamagedPassportDialog: () => void;
};

const Step2PassportApplicationQuestionnaireSubStep2 = ({
  setSubStep,
  selectedOption,
  setSelectedOption,
  showPassportInfoDialog,
  showLostOrDamagedPassportDialog,
}: Step2PassportApplicationQuestionnaireSubStep2Props) => {
  return (
    <ScrollView>
      <View style={styles.subStepContainer}>
        <Pressable
          style={({pressed}) => ({
            transform: [{scale: pressed ? 0.99 : 1}],
          })}
          onPress={() => {
            setSubStep(1);
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
          <Text style={styles.questionnaireData}>
            Bagaimana kondisi paspor lama Anda?
          </Text>

          <Pressable
            onPress={showPassportInfoDialog}
            style={({pressed}) => [
              styles.subStepButtonBackWrapper,
              {transform: [{scale: pressed ? 0.99 : 1}]},
            ]}>
            <Icon
              name="alert-circle-outline"
              size={18}
              color={Colors.secondary30.color}
            />
            <Text
              style={[
                styles.subStepButtonBackText,
                {color: Colors.secondary30.color},
              ]}>
              Klik di sini untuk melihat informasi kondisi paspor
            </Text>
          </Pressable>

          {previousPassportConditionOptions.map(option => (
            <RadioButtonOptionComponent
              key={option.value}
              label={option.label}
              description={option.description}
              value={option.value}
              selectedValue={selectedOption}
              onSelect={setSelectedOption}
            />
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => {
            (selectedOption === 'expired' || selectedOption === 'full_pages') &&
              setSubStep(3);
            (selectedOption === 'lost' ||
              selectedOption === 'damaged' ||
              selectedOption === 'lost_due_to_force_majeure' ||
              selectedOption === 'damaged_due_to_force_majeure') &&
              showLostOrDamagedPassportDialog();
          }}
          style={styles.subStepButtonContained}
          textColor={Colors.neutral100.color}>
          Lanjut
        </Button>
      </View>
    </ScrollView>
  );
};

export default Step2PassportApplicationQuestionnaireSubStep2;
