import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';

const StepIndicator = ({currentStep, totalSteps, completedSteps}: any) => {
  return (
    <View style={styles.container}>
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = completedSteps.includes(stepNumber);
        const isCurrent = currentStep === stepNumber;

        const backgroundColor = isCompleted
          ? Colors.secondary30.color
          : Colors.neutral100.color;

        const textColor = isCompleted
          ? Colors.neutral100.color
          : isCurrent
          ? Colors.secondary30.color
          : Colors.secondary50.color;

        const textStyle = isCompleted
          ? FontFamily.notoSansBold
          : isCurrent
          ? FontFamily.notoSansRegular
          : FontFamily.notoSansRegular;

        return (
          <React.Fragment key={index}>
            <View style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.stepIndicatorContainer,
                  {
                    backgroundColor: backgroundColor,
                    borderColor: isCompleted
                      ? Colors.secondary30.color
                      : Colors.neutral100.color,
                  },
                ]}>
                <Text
                  style={{
                    includeFontPadding: false,
                    fontSize: 12,
                    color: textColor,
                    ...textStyle,
                  }}>
                  {stepNumber}
                </Text>
              </View>
            </View>
            {index < totalSteps - 1 && (
              <View
                style={[
                  styles.stepIndicatorLine,
                  {
                    backgroundColor: isCompleted
                      ? Colors.secondary30.color
                      : Colors.neutral100.color,
                  },
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.secondary70.color,
  },
  stepIndicatorContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIndicatorText: {
    includeFontPadding: false,
    fontSize: 14,
  },
  stepIndicatorLine: {
    flex: 1,
    height: 2,
  }
});

export default StepIndicator;
