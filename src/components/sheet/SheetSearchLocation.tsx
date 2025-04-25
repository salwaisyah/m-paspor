import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Portal, TextInput} from 'react-native-paper';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/FontFamily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import immigrationOfficesData from '../../data/Steps/ImmigrationOfficesData';
import {useState} from 'react';

type SheetSearchLocationProps = {
  visible: boolean;
  onClose: () => void;
};

const ItemSeparator = () => <View style={styles.flatllistGap} />;

const renderSearchInput = () => {
  return (
    <View>
      <TextInput
        mode="outlined"
        style={styles.searchInput}
        theme={{roundness: 12}}
        placeholderTextColor={Colors.primary60.color}
        activeOutlineColor={Colors.primary10.color}
        placeholder="Cari lokasi"
        textColor="#48454E"
        contentStyle={{marginLeft: 48}}
        left={
          <TextInput.Icon
            icon="magnify"
            color="#48454E"
            style={{marginLeft: 8}}
          />
        }
      />
    </View>
  );
};

const renderCurrentLocation = (onPress: () => void) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.currentLocationContainer,
        {
          transform: [{scale: pressed ? 0.985 : 1}],
        },
      ]}>
      <Icon name="crosshairs-gps" size={24} color={Colors.primary30.color} />
      <View style={styles.currentLocationTextContainer}>
        <Text style={styles.currentLocationTitle}>
          Pakai lokasi saya saat ini
        </Text>
        <Text style={styles.currentLocationSubtitle}>
          Jl. Raya Muchtar No. 8, Depok, 16511
        </Text>
      </View>
    </Pressable>
  );
};

const renderNearestLocationItem = ({
  item,
  onPress,
}: {
  item: any;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.nearestLocationContainer,
        {
          transform: [{scale: pressed ? 0.985 : 1}],
        },
      ]}>
      <View style={styles.nearestLocationInfoWrapper}>
        <View style={styles.nearestLocationHeader}>
          <Text style={styles.locationName}>{item.name}</Text>
          <Text style={styles.locationDistance}>{item.distance}</Text>
        </View>
        <Text style={styles.locationAddress}>{item.address}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          mode="contained"
          textColor={Colors.neutral100.color}
          style={styles.selectButton}>
          Pilih Kantor
        </Button>
        <Button
          mode="outlined"
          textColor={Colors.primary30.color}
          style={styles.viewButton}>
          Lihat Lokasi
        </Button>
      </View>
    </Pressable>
  );
};

const SheetSearchLocation = (props: SheetSearchLocationProps) => {
  const {visible, onClose} = props;
  const [showNearestLocations, setShowNearestLocations] = useState(false);

  return (
    <Portal>
      <Modal visible={visible} transparent animationType="slide">
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.modalContainer}>
          {renderSearchInput()}
          {!showNearestLocations &&
            renderCurrentLocation(() => setShowNearestLocations(true))}

          {showNearestLocations && (
            <FlatList
              data={immigrationOfficesData}
              keyExtractor={item => item.id}
              renderItem={({item}) =>
                renderNearestLocationItem({item, onPress: onClose})
              }
              contentContainerStyle={{marginVertical: 16, paddingBottom: 32}}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparator}
            />
          )}
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
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
  searchInput: {
    backgroundColor: Colors.neutral100.color,
    fontSize: 13,
    ...FontFamily.notoSansRegular,
    includeFontPadding: false,
  },
  currentLocationContainer: {
    marginVertical: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary30.color,
  },
  currentLocationTextContainer: {
    gap: 6,
  },
  currentLocationTitle: {
    includeFontPadding: false,
    fontSize: 14,
    ...FontFamily.notoSansMedium,
    color: Colors.primary30.color,
  },
  currentLocationSubtitle: {
    includeFontPadding: false,
    fontSize: 12,
    ...FontFamily.notoSansRegular,
    color: Colors.primary40.color,
  },
  nearestLocationContainer: {
    padding: 16,
    borderRadius: 8,
    gap: 16,
    borderWidth: 1,
    borderColor: Colors.secondary30.color,
  },
  nearestLocationInfoWrapper: {
    gap: 8,
  },
  nearestLocationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationName: {
    color: Colors.secondary30.color,
    includeFontPadding: false,
    ...FontFamily.notoSansBold,
    fontSize: 14,
    flex: 1,
  },
  locationDistance: {
    color: Colors.primary60.color,
    includeFontPadding: false,
    fontSize: 12,
    ...FontFamily.notoSansMedium,
  },
  locationAddress: {
    color: Colors.primary40.color,
    includeFontPadding: false,
    fontSize: 12,
    ...FontFamily.notoSansRegular,
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  selectButton: {
    backgroundColor: Colors.primary30.color,
    flex: 1,
  },
  viewButton: {
    borderColor: Colors.primary30.color,
    flex: 1,
  },
  flatllistGap: {
    height: 16,
  },
});

export default SheetSearchLocation;
