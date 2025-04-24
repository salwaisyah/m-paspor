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
  Image,
} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RegularPassportIcon from '../../../assets/icons/regular_passport.svg';
import ExpressPassportIcon from '../../../assets/icons/express_passport.svg';
import GuidebookIcon from '../../../assets/icons/guidebook.svg';
import EazyPassportIcon from '../../../assets/icons/eazy_passport.svg';
import passportAppointmentData from '../../data/History/PassportAppointmentData';
import PassportAppointmentCard from '../../components/PassportAppointmentCard';
import {useCallback, useRef} from 'react';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const ItemSeparator = () => <View style={styles.flatllistGap} />;

type RenderContentProps = {
  showDialog: () => void;
};

const RenderBanner = () => {
  const {width} = Dimensions.get('window');
  const ITEM_WIDTH = width * 0.8;
  const ITEM_SPACING = (width - ITEM_WIDTH) / 2;
  const FIRST_ITEM_SPACING = 16;
  const scrollX = useRef(new Animated.Value(0)).current;
  const data = [
    {
      id: '1',
      image: require('../../../assets/images/banner01PengajuanPaspor.png'),
    },
    {
      id: '2',
      image: require('../../../assets/images/banner02Panduan.png'),
    },
    {
      id: '3',
      image: require('../../../assets/images/banner03EazyPassport.png'),
    },
  ];

  return (
    <>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
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
        renderItem={({item, index}) => {
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
              <Image
                source={item.image}
                style={styles.item}
                resizeMode="cover"
              />
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
    </>
  );
};

const RenderContent = ({showDialog}: RenderContentProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <>
      <View style={styles.topContainer}>{RenderBanner()}</View>
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
  readonly showDialog: () => void;
  readonly visible: boolean;
};

function HomeScreen({showDialog, visible}: HomeScreenProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(
        visible ? '#295E70' : Colors.secondary30.color,
      );
      StatusBar.setBarStyle('light-content');

      return () => {
        StatusBar.setBackgroundColor(Colors.secondary30.color);
        StatusBar.setBarStyle('light-content');
      };
    }, [visible]),
  );

  return (
    <View style={styles.container}>
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
