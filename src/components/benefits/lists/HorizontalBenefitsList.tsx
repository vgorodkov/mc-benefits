import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Benefit, Category } from '@customTypes/benefits';
import { BenefitItem } from '@components/benefits/item/BenefitItem';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';
import { SeeMoreBlock } from '@components/benefits/SeeMoreBlock';
import { spacing } from '@constants/layout';

interface HorizontalBenefitsList {
  benefitsData: Benefit[];
  benefitVariant: 'default' | 'new' | 'detailed';
  listTitle: string;
  category?: Category;
}

const MAX_DATA_LENGTH = 4;

export const HorizontalBenefitsList = ({
  benefitsData,
  benefitVariant = 'default',
  listTitle = 'BenefitsList',
  category,
}: HorizontalBenefitsList) => {
  const dataToShow = benefitsData.slice(0, MAX_DATA_LENGTH);
  const restDataLength = benefitsData.length - dataToShow.length;
  const areItemsLeft = restDataLength > 0;

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const renderItem = ({ item }: { item: Benefit }) => {
    return <BenefitItem benefit={item} variant={benefitVariant} />;
  };

  const onAllBenefitsBtnPress = () => {
    if (category) {
      navigation.navigate(Route.Category, {
        categoryId: category.id,
        categoryLabel: category.title,
      });
    }
  };

  return (
    <View style={styles.horizontalBenefitsList}>
      <View style={styles.horizontalBenefitsListHeader}>
        <Text variant="header_2">{listTitle}</Text>
        {benefitVariant === 'default' && (
          <Pressable onPress={onAllBenefitsBtnPress}>
            <Text variant="outline-sb" style={{ color: colors.primary }}>
              Все
            </Text>
          </Pressable>
        )}
      </View>
      <FlatList
        data={dataToShow}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalBenefitsListConent}
        ListFooterComponent={() =>
          areItemsLeft ? <SeeMoreBlock category={category} restDataLength={restDataLength} /> : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalBenefitsList: {
    gap: spacing.default,
  },

  horizontalBenefitsListConent: { paddingHorizontal: spacing.default, gap: spacing.small },
  horizontalBenefitsListHeader: {
    paddingHorizontal: spacing.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeMoreBlock: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.neutralGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
