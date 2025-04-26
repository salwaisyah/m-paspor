import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Portal, Button, Divider, RadioButton} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import markedDatesData from '../../data/Steps/MarkedDatesData';
import arrivalTimesData from '../../data/Steps/ArrivalTimesData';

type Props = {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const LegendItem = ({color, label, border}: any) => (
  <View style={styles.legendItemContainer}>
    <View
      style={[
        styles.legendColorBox,
        {backgroundColor: color},
        border && styles.legendColorBoxBorder,
      ]}
    />
    <Text style={styles.legendLabel}>{label}</Text>
  </View>
);

const SheetSelectDate = (props: Props) => {
  const {visible, onClose, onContinue} = props;
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('2025-05-01');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const markedDates = {
    ...markedDatesData,
    [selectedDate]: {
      selected: true,
      selectedColor: Colors.indicatorOrange.color,
      selectedTextColor: Colors.neutral100.color,
    },
  };

  const renderHeaderCalendar = () => {
    const headerText = moment(currentMonth).format('MMMM YYYY');

    const handleMonthChange = (amount: number) => {
      const updatedMonth = moment(currentMonth)
        .add(amount, 'months')
        .format('YYYY-MM-DD');
      setCurrentMonth(updatedMonth);
    };

    return (
      <View style={styles.calendarHeaderContainer}>
        <Text style={styles.calendarHeaderText}>{headerText}</Text>
        <View style={styles.calendarNavigation}>
          <TouchableOpacity onPress={() => handleMonthChange(-1)}>
            <Icon
              name="chevron-left"
              size={24}
              color={Colors.secondary30.color}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMonthChange(1)}>
            <Icon
              name="chevron-right"
              size={24}
              color={Colors.secondary30.color}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTimeSlotItem = ({item}: any) => {
    return (
      <View>
        <Text style={styles.timeSlotTitle}>Jam Kedatangan</Text>
        <View style={styles.timeSlotRadioGroup}>
          <View style={styles.timeSlotItem}>
            <RadioButton
              value={item.id}
              status={
                selectedTimeSlot === item.id ? 'checked' : 'unchecked'
              }
              onPress={() => setSelectedTimeSlot(item.id)}
              color={Colors.secondary30.color}
              uncheckedColor={Colors.secondary30.color}
            />
            <Text style={styles.timeSlotLabel}>{item.arrivalTime}</Text>
          </View>
          <View style={styles.timeSlotQueueInfo}>
            <View style={styles.queueDetail}>
              <Text style={styles.queueDetailTitle}>Jumlah Antrian</Text>
              <Text style={styles.queueDetailValue}>{item.queueCount}</Text>
            </View>
            <View style={styles.queueDetail}>
              <Text style={styles.queueDetailTitle}>Sisa Kuota</Text>
              <Text style={styles.queueDetailValue}>{item.remainingQuota}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Portal>
      <Modal visible={visible} transparent animationType="slide">
        <Pressable style={styles.modalBackdrop} onPress={onClose} />
        <View style={styles.modalContentContainer}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.modalScrollViewContent}>
            <View style={styles.modalCloseButtonContainer}>
              <Pressable
                style={({pressed}) => [
                  styles.closeButton,
                  pressed && styles.closeButtonPressed,
                ]}
                onPress={onClose}>
                <Icon name="close" size={24} color={Colors.primary30.color} />
              </Pressable>
            </View>

            <View style={styles.calendarContainer}>
              <Calendar
                key={currentMonth}
                theme={{
                  textDayFontSize: 14,
                  textDayStyle: {
                    includeFontPadding: false,
                    marginTop: 6,
                    ...FontFamily.notoSansRegular,
                  },
                  textDayHeaderFontFamily: 'NotoSans-Medium',
                  textDayHeaderFontSize: 14,
                  textSectionTitleColor: Colors.primary30.color,
                  arrowColor: Colors.secondary30.color,
                }}
                onDayPress={day => setSelectedDate(day.dateString)}
                markedDates={markedDates}
                hideArrows={true}
                current={currentMonth}
                onMonthChange={month => {
                  const newMonth = `${month.year}-${String(
                    month.month,
                  ).padStart(2, '0')}-01`;
                  setCurrentMonth(newMonth);
                }}
                renderHeader={renderHeaderCalendar}
              />

              <Divider style={styles.divider} />

              <View style={styles.legendMainContainer}>
                <View style={styles.legendColumn}>
                  <LegendItem
                    color={Colors.indicatorGreen.color}
                    label="Kuota tersedia"
                  />
                  <LegendItem
                    color={Colors.indicatorRed.color}
                    label="Kuota penuh"
                  />
                </View>
                <View style={styles.legendColumn}>
                  <LegendItem
                    color={Colors.indicatorOrange.color}
                    label="Tanggal terpilih"
                  />
                  <LegendItem
                    color={Colors.neutral100.color}
                    border
                    label="Kuota belum dibuka"
                  />
                </View>
              </View>

              <Divider style={styles.divider} />
            </View>

            <FlatList
              data={arrivalTimesData}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              renderItem={renderTimeSlotItem}
            />

            <View style={styles.continueButtonWrapper}>
              <Button
                style={styles.continueButton}
                mode="contained"
                textColor={Colors.neutral100.color}
                onPress={onContinue}>
                Simpan
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    height: '90%',
    width: '100%',
    maxHeight: '90%',
  },
  modalScrollViewContent: {
    paddingBottom: 24,
  },
  modalCloseButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButton: {
    transform: [{scale: 1}],
  },
  closeButtonPressed: {
    transform: [{scale: 0.925}],
  },
  calendarContainer: {
    marginTop: 8,
  },
  calendarHeaderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  calendarHeaderText: {
    fontSize: 14,
    ...FontFamily.notoSansBold,
    color: Colors.secondary30.color,
    includeFontPadding: false,
  },
  calendarNavigation: {
    flexDirection: 'row',
    gap: 12,
  },
  divider: {
    marginVertical: 16,
    height: 1,
    backgroundColor: Colors.primary70.color,
  },
  legendMainContainer: {
    flexDirection: 'row',
    gap: 32,
  },
  legendColumn: {
    gap: 16,
  },
  legendItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendColorBox: {
    width: 16,
    height: 16,
    marginRight: 6,
    borderRadius: 8,
  },
  legendColorBoxBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  legendLabel: {
    fontSize: 11,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
    color: Colors.primary30.color,
  },
  continueButtonWrapper: {
    marginTop: 16,
  },
  continueButton: {
    backgroundColor: Colors.primary30.color,
  },
  timeSlotTitle: {
    color: Colors.primary30.color,
    includeFontPadding: false,
    fontSize: 12,
    ...FontFamily.notoSansSemiBold,
  },
  timeSlotRadioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSlotItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  timeSlotLabel: {
    ...FontFamily.notoSansMedium,
    fontSize: 12,
    includeFontPadding: false,
    color: Colors.secondary30.color,
    marginStart: -8,
  },
  timeSlotQueueInfo: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  queueDetail: {
    gap: 6,
  },
  queueDetailTitle: {
    fontSize: 10.5,
    includeFontPadding: false,
    color: Colors.primary30.color,
    ...FontFamily.notoSansBold,
  },
  queueDetailValue: {
    fontSize: 10.5,
    includeFontPadding: false,
    color: Colors.primary30.color,
    ...FontFamily.notoSansRegular,
  },
});

export default SheetSelectDate;
