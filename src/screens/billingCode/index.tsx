import {ScrollView, StatusBar, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import styles from './styles';
import {RootStackParamList} from '../../navigation/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../assets/styles/Colors';
import Accordion from '../../components/Accordion';

type BillingCodeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BillingCode'
>;

function BillingCodeScreen() {
  const navigation = useNavigation<BillingCodeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.neutral100.color}
        barStyle="dark-content"
      />
      <View style={styles.appBarContainer}>
        <Icon
          name="arrow-left"
          size={24}
          style={styles.appBarIcon}
          color={Colors.secondary30.color}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.appBarTitle}>Kode Billing</Text>
      </View>
      <ScrollView>
        <View style={styles.billingCodeCardContainer}>
          <View style={styles.billingCodeContentWrapper}>
            <Text style={styles.billingCodeTextTitle}>Kode Billing</Text>
            <View style={styles.billingCodeIconContentWrapper}>
              <Text style={styles.billingCodeTextNumber}>12345678901234</Text>
              <Icon
                name="content-copy"
                size={16}
                color={Colors.secondary30.color}
              />
            </View>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.billingCodeContentWrapper}>
            <View style={styles.billingCodeIconContentWrapper}>
              <Icon name="tray-arrow-down" size={18} />
              <Text style={styles.billingCodeTextDesc}>
                Unduh PDF Kode Billing Pembayaran Paspor
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.billingCodeDataContentContainer}>
          <Text style={styles.paymentMethodTitle}>Cara Pembayaran</Text>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>1.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                ATM
              </Text>
            </View>
            <View style={styles.paymentMethodOptionAccordionContainer}>
              <Accordion title="BCA" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BNI" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BRI" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="Mandiri" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
            </View>
          </View>
          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodOptionTitleWrapper}>
              <Text style={styles.paymentMethodOptionTitle}>2.</Text>
              <Text
                style={[
                  styles.paymentMethodOptionTitle,
                  styles.paymentMethodOptionTitleFlex,
                ]}>
                Mobile Banking dan Internet Banking
              </Text>
            </View>
            <View style={styles.paymentMethodOptionAccordionContainer}>
              <Accordion title="BNI (Mobile Banking)" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BCA (Internet Banking)" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BRI (Internet Banking)" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BRImo (Mobile Banking)" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion
                title="Livin’ by Mandiri (Mobile Banking)"
                titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
              <Accordion title="BSI Mobile (Mobile Banking)" titleRegular>
                <View>
                  <Text>Content</Text>
                </View>
              </Accordion>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BillingCodeScreen;
