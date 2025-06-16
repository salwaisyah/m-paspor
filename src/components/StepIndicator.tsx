import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StepIndicator = ({
  currentStep,
  totalSteps,
  completedSteps,
  onStepPress,
  validationStatus,
}: any) => {
  return (
    <View style={styles.container}>
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = completedSteps.includes(stepNumber);
        const isCurrent = currentStep === stepNumber;
        const stepStatus = validationStatus[stepNumber];

        const backgroundColorStyle =
          stepStatus === 'completed'
            ? Colors.indicatorGreen.color
            : stepStatus === 'invalid'
            ? Colors.indicatorOrange.color
            : Colors.neutral100.color;

        const indicatorLineBackgroundColorStyle = isCompleted
          ? Colors.secondary30.color
          : Colors.neutral100.color;

        const borderColorStyle =
          stepStatus === 'completed'
            ? Colors.indicatorGreen.color
            : stepStatus === 'invalid'
            ? Colors.indicatorOrange.color
            : isCurrent
            ? Colors.secondary30.color
            : Colors.neutral100.color;

        const textColorStyle =
          isCompleted || stepStatus === 'invalid'
            ? Colors.neutral100.color
            : isCurrent
            ? Colors.secondary30.color
            : Colors.secondary50.color;

        const textStyle = isCompleted
          ? FontFamily.notoSansBold
          : isCurrent
          ? FontFamily.notoSansSemiBold
          : FontFamily.notoSansRegular;

        return (
          <React.Fragment key={index}>
            <Pressable
              onPress={() => onStepPress?.(stepNumber)}
              style={({pressed}) => ({
                transform: [{scale: pressed ? 0.97 : 1}],
              })}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={[
                    styles.stepIndicatorContainer,
                    {
                      backgroundColor: backgroundColorStyle,
                      borderColor: borderColorStyle,
                    },
                  ]}>
                  {stepStatus === 'completed' ? (
                    <Icon
                      name="check"
                      color={Colors.neutral100.color}
                      size={16}
                    />
                  ) : stepStatus === 'invalid' ? (
                    <Icon
                      name="alert-circle"
                      color={Colors.neutral100.color}
                      size={16}
                    />
                  ) : (
                    <Text
                      style={{
                        includeFontPadding: false,
                        fontSize: 12,
                        color: textColorStyle,
                        ...textStyle,
                      }}>
                      {stepNumber}
                    </Text>
                  )}
                </View>
              </View>
            </Pressable>

            {index < totalSteps - 1 && (
              <View
                style={[
                  styles.stepIndicatorLine,
                  {
                    backgroundColor: indicatorLineBackgroundColorStyle,
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
  },
});

export default StepIndicator;
