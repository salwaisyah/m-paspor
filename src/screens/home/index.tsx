import * as React from 'react';
import styles from './styles';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import RegularPassportIcon from '../../../assets/icons/regular_passport.svg';
import ExpressPassportIcon from '../../../assets/icons/express_passport.svg';
import GuidebookIcon from '../../../assets/icons/guidebook.svg';
import EazyPassportIcon from '../../../assets/icons/eazy_passport.svg';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import PassportAppointmentCard from '../../components/PassportAppointmentCard';
import {useRef} from 'react';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;
const FIRST_ITEM_SPACING = 16;

const data = [1, 2, 3, 4];

const ItemSeparator = () => <View style={styles.flatllistGap} />;

type RenderContentProps = {
  showDialog: () => void;
};

const RenderContent = ({showDialog}: RenderContentProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={styles.topContainer}>
        <Animated.FlatList
          data={data}
          keyExtractor={item => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          bounces={false}
          ListHeaderComponent={<View style={{width: FIRST_ITEM_SPACING}} />}
          ListFooterComponent={<View style={{width: ITEM_SPACING}} />}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          renderItem={({index}) => {
            const inputRange = [
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
              (index + 1) * ITEM_WIDTH,
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.875, 1, 0.875],
              extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={[
                  styles.itemContainer,
                  {
                    transform: [{scale}],
                    opacity,
                  },
                ]}>
                <View style={styles.item} />
              </Animated.View>
            );
          }}
        />
        <View style={styles.indicatorContainer}>
          {data.map((_, i) => {
            const inputRange = [
              (i - 1) * ITEM_WIDTH,
              i * ITEM_WIDTH,
              (i + 1) * ITEM_WIDTH,
            ];

            const dotOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotScale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1.2, 0.8],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={[
                  styles.indicatorInactive,
                  {
                    opacity: dotOpacity,
                    transform: [{scale: dotScale}],
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={styles.serviceText}>Layanan</Text>
        <View style={styles.serviceOptionWrapper}>
          <View style={styles.serviceOptionContainer}>
            <Pressable
              onPress={showDialog}
              style={({pressed}) => [
                styles.serviceIcon,
                {
                  transform: [{scale: pressed ? 0.925 : 1}],
                },
              ]}>
              <RegularPassportIcon />
            </Pressable>
            <Text style={styles.serviceDesc}>Paspor Reguler</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <Pressable
              onPress={showDialog}
              style={({pressed}) => [
                styles.serviceIcon,
                {
                  transform: [{scale: pressed ? 0.925 : 1}],
                },
              ]}>
              <ExpressPassportIcon />
            </Pressable>
            <Text style={styles.serviceDesc}>Paspor Percepatan</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <Pressable
              onPress={() => navigation.navigate('Guidebook')}
              style={({pressed}) => [
                styles.serviceIcon,
                {
                  transform: [{scale: pressed ? 0.925 : 1}],
                },
              ]}>
              <GuidebookIcon />
            </Pressable>
            <Text style={styles.serviceDesc}>Buku Panduan</Text>
          </View>
          <View style={styles.serviceOptionContainer}>
            <Pressable
              onPress={() => navigation.navigate('EazyPassport')}
              style={({pressed}) => [
                styles.serviceIcon,
                {
                  transform: [{scale: pressed ? 0.925 : 1}],
                },
              ]}>
              <EazyPassportIcon />
            </Pressable>
            <Text style={styles.serviceDesc}>EAZY Pasport</Text>
          </View>
        </View>
      </View>
      <View style={styles.applicationStatusContainer}>
        <View style={styles.applicationStatusTextWrapper}>
          <Text style={styles.applicationStatusTitle}>Status Permohonan</Text>
          <Pressable
            onPress={() => navigation.navigate('History')}
            style={({pressed}) => ({
              transform: [{scale: pressed ? 0.925 : 1}],
            })}>
            <Text style={styles.applicationStatusSeeAll}>Lihat semua</Text>
          </Pressable>
        </View>
        <View style={styles.cardWrapper}>
          <FlatList
            data={passportAppointmentData.slice(-2)}
            renderItem={({item}) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('ApplicationDetail', {data: item})
                }
                style={({pressed}) => ({
                  transform: [{scale: pressed ? 0.975 : 1}],
                })}>
                <PassportAppointmentCard
                  applicantName={item.applicantName}
                  applicantCode={item.applicantCode}
                  appointmentDate={item.appointmentDate}
                  appointmentTime={item.appointmentTime}
                  serviceUnit={item.serviceUnit}
                  status={item.status}
                />
              </Pressable>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
          />
        </View>
      </View>
    </>
  );
};

type HomeScreenProps = {
  showDialog: () => void;
};

function HomeScreen({showDialog}: HomeScreenProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary30.color}
        barStyle={'light-content'}
      />
      <View style={styles.appBarContainer}>
        <Text style={styles.appBarTitle}>Halo, X!</Text>
        <Icon
          name="bell-outline"
          size={24}
          color={Colors.neutral100.color}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <FlatList
        data={[{}]}
        renderItem={() => <RenderContent showDialog={showDialog} />}
      />
    </View>
  );
}

export default HomeScreen;
