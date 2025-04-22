import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';
import StepIndicator from '../../components/StepIndicator';

const renderContent = (
  step: number,
  subStep: number,
  setStep: (step: number) => void,
  setSubStep: (step: number) => void,
) => {
  if (step === 1) {
    switch (subStep) {
      case 1:
        return (
          <View>
            <Text>Step 1.1</Text>
            <Button title="Next" onPress={() => setSubStep(2)} />
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Step 1.2</Text>
            <Button title="Next" onPress={() => setSubStep(3)} />
            <Button title="Back" onPress={() => setSubStep(1)} />
          </View>
        );
      case 3:
        return (
          <View>
            <Text>Step 1.3</Text>
            <Button
              title="Next"
              onPress={() => {
                setStep(2);
                setSubStep(1);
              }}
            />
            <Button title="Back" onPress={() => setSubStep(2)} />
          </View>
        );
      default:
        return null;
    }
  }

  if (step === 2) {
    switch (subStep) {
      case 1:
        return (
          <View>
            <Text>Step 2.1</Text>
            <Button title="Next" onPress={() => setSubStep(2)} />
            <Button
              title="Back"
              onPress={() => {
                setStep(1);
                setSubStep(3);
              }}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Step 2.2</Text>
            <Button title="Next" onPress={() => setSubStep(3)} />
            <Button title="Back" onPress={() => setSubStep(1)} />
          </View>
        );
      case 3:
        return (
          <View>
            <Text>Step 2.3</Text>
            <Button
              title="Next"
              onPress={() => {
                setStep(3);
                setSubStep(1);
              }}
            />
            <Button title="Back" onPress={() => setSubStep(2)} />
          </View>
        );
      default:
        return null;
    }
  }

  switch (step) {
    case 3:
      return (
        <View>
          <Button title="Next" onPress={() => setStep(4)} />
          <Button title="Back" onPress={() => setStep(2)} />
        </View>
      );
    case 4:
      return (
        <View>
          <Button title="Next" onPress={() => setStep(5)} />
          <Button title="Back" onPress={() => setStep(3)} />
        </View>
      );
    case 5:
      return (
        <View>
          <Button title="Next" onPress={() => setStep(6)} />
          <Button title="Back" onPress={() => setStep(4)} />
        </View>
      );
    case 6:
      return (
        <View>
          <Button title="Next" onPress={() => setStep(7)} />
          <Button title="Back" onPress={() => setStep(5)} />
        </View>
      );
    case 7:
      return (
        <View>
          <Button title="Back" onPress={() => setStep(6)} />
        </View>
      );
    default:
      return null;
  }
};

function ExpressPassportScreen() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const completedSteps = [...Array(step - 1)].map((_, i) => i + 1);
  const stepTitles: {[key: number]: string} = {
    1: 'Informasi Pribadi',
    2: 'Dokumen Pendukung',
    3: 'Pembayaran',
    4: 'Konfirmasi Data',
    5: 'Verifikasi',
    6: 'Pemrosesan',
    7: 'Selesai',
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>{stepTitles[step]}</Text>
      </View>
      <StepIndicator
        currentStep={step}
        totalSteps={7}
        completedSteps={completedSteps}
      />
      {renderContent(step, subStep, setStep, setSubStep)}
    </View>
  );
}

export default ExpressPassportScreen;
