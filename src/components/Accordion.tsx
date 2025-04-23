import {ReactNode, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../assets/styles/Colors';
import FontFamily from '../../assets/styles/FontFamily';

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Pressable
        style={({pressed}) => ({
          transform: [{scale: pressed ? 0.99 : 1}],
          flexDirection: 'row',
          paddingVertical: 12,
          justifyContent: 'space-between',
        })}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={Colors.primary30.color}
        />
      </Pressable>
      {expanded && <View>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionTitle: {
    ...FontFamily.notoSansBold,
    includeFontPadding: false,
    fontSize: 14,
    color: Colors.secondary30.color,
  },
});

export default Accordion;
