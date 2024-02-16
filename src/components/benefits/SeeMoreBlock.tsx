import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import { Category } from '@customTypes/benefits';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';
import { Text } from '@components/common/Text';
import { sizes } from '@constants/layout';
import { colors } from '@constants/colors';

export const SeeMoreBlock = ({
  restDataLength,
  category,
}: {
  restDataLength: number;
  category?: Category;
}) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const onSeeMoreBlockPress = () => {
    if (category) {
      navigation.navigate(Route.Category, {
        categoryId: category.id,
        categoryLabel: category.title,
      });
    }
  };

  return (
    <Pressable
      onPress={onSeeMoreBlockPress}
      style={[
        styles.seeMoreBlock,
        {
          width: width * sizes.benefitItemCoef.default.width,
          height: height * sizes.benefitItemCoef.default.height,
        },
      ]}
    >
      <Text style={{ color: colors.gray }} variant="outline-sb">
        Смотреть еще {restDataLength}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  seeMoreBlock: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.neutralGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
