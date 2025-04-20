import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WaitingForPaymentIcon from '../../assets/icons/waiting_for_payment.svg';
import {StyleSheet, Text, View} from 'react-native';
import FontFamily from '../../assets/styles/FontFamily';
import Colors from '../../assets/styles/Colors';

type PassportAppointmentCardProps = {
  applicantName: string;
  applicantCount: number;
  appointmentDate: string;
  appointmentTime: string;
  serviceUnit: string;
  status: string;
};

const renderStatusContent = (status: string) => {
  let backgroundColor;
  let IconComponent;

  switch (status) {
    case 'Permohonan Kadaluarsa':
      backgroundColor = Colors.indicatorRed.color;
      IconComponent = () => (
        <Icon name="close" size={18} color={Colors.neutral100.color} />
      );
      break;
    case 'Sudah Terbayar':
      backgroundColor = Colors.indicatorGreen.color;
      IconComponent = () => (
        <Icon name="check" size={18} color={Colors.neutral100.color} />
      );
      break;
    default:
      backgroundColor = Colors.indicatorOrange.color;
      IconComponent = () => <WaitingForPaymentIcon width={18} height={18} />;
      break;
  }

  return (
    <>
      {status === 'Sudah Terbayar' && (
        <View style={styles.seeRequirementsWrapper}>
          <Text style={styles.appointmentStatusText}>Lihat Persyaratan</Text>
        </View>
      )}
      <View style={[styles.appointmentStatusWrapper, {backgroundColor}]}>
        <IconComponent />
        <Text style={styles.appointmentStatusText}>{status}</Text>
      </View>
    </>
  );
};

const PassportAppointmentCard: React.FC<PassportAppointmentCardProps> = ({
  applicantName,
  applicantCount,
  appointmentDate,
  appointmentTime,
  serviceUnit,
  status,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topCardContainer}>
        <View style={styles.topCardContentTextWrapper}>
          <Text style={styles.applicantNameText}>{applicantName}</Text>
          <Text style={styles.applicantCountText}>
            {applicantCount} Pemohon
          </Text>
        </View>
        <Icon name="menu-right" size={24} />
      </View>
      <View style={styles.midCardContainer}>
        <View style={styles.midCardContentWrapper}>
          <Icon
            name="calendar-today"
            size={24}
            color={Colors.secondary30.color}
          />
          <Text style={styles.midCardContentTextStyle}>{appointmentDate}</Text>
        </View>
        <View style={styles.midCardContentWrapper}>
          <Icon
            name="clock-outline"
            size={24}
            color={Colors.secondary30.color}
          />
          <Text style={styles.midCardContentTextStyle}>{appointmentTime}</Text>
        </View>
        <View style={styles.midCardContentWrapper}>
          <Icon
            name="map-marker-outline"
            size={24}
            color={Colors.secondary30.color}
          />
          <Text style={styles.midCardContentTextStyle}>{serviceUnit}</Text>
        </View>
      </View>
      <View>
        {status === 'Menunggu Pembayaran' && (
          <View style={styles.appointmentAlertWrapper}>
            <Text style={styles.appointmentAlertText}>
              Selesaikan pembayaran sebelum
            </Text>
            <Text style={styles.appointmentAlertText}>16 April 2025 23:30</Text>
          </View>
        )}
        <View style={styles.appointmentStatusContainer}>
          {renderStatusContent(status)}
        </View>
      </View>
    </View>
  );
};

export default PassportAppointmentCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 16,
    backgroundColor: Colors.neutral100.color,
    borderWidth: 1,
    borderColor: Colors.secondary50.color,
  },
  topCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  topCardContentTextWrapper: {
    gap: 4,
    flex: 1,
  },
  applicantNameText: {
    fontSize: 14,
    ...FontFamily.notoSansBold,
    textTransform: 'uppercase',
    color: Colors.secondary30.color,
  },
  applicantCountText: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    color: Colors.primary30.color,
  },
  midCardContainer: {
    gap: 8,
    marginVertical: 8,
  },
  midCardContentWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  midCardContentTextStyle: {
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    color: Colors.primary30.color,
  },
  appointmentAlertWrapper: {
    marginTop: 5,
    marginBottom: 13,
  },
  appointmentAlertText: {
    ...FontFamily.notoSansRegular,
    fontSize: 10,
    color: Colors.indicatorRed.color,
  },
  appointmentStatusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  appointmentStatusWrapper: {
    gap: 6,
    alignItems: 'center',
    backgroundColor: Colors.indicatorOrange.color,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 8,
  },
  appointmentStatusText: {
    fontSize: 12,
    ...FontFamily.notoSansMedium,
    color: Colors.neutral100.color,
    includeFontPadding: false,
  },
  seeRequirementsWrapper: {
    backgroundColor: Colors.primary30.color,
    borderRadius: 100,
    paddingHorizontal: 16,
    padding: 8,
    flexDirection: 'row',
  },
});
