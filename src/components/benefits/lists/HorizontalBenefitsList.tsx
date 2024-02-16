import { FlatList, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Benefit, Category } from '@customTypes/benefits';
import { BenefitItem } from '@components/benefits/BenefitItem';
import { Text } from '@components/common/Text';
import { colors } from '@constants/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList, Route } from '@customTypes/navigation';
import { useDispatch } from 'react-redux';
import { selectActiveCategory } from 'redux/slices/categorySlice';

interface HorizontalBenefitsList {
  benefitsData: Benefit[];
  benefitVariant: 'default' | 'new' | 'detailed';
  listTitle: string;
  category: Category;
}

const SeeMoreBlock = ({
  restDataLength,
  category,
}: {
  restDataLength: number;
  category: Category;
}) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const onSeeMoreBlockPress = () => {
    navigation.navigate(Route.Category, {
      categoryId: category.id,
      categoryLabel: category.title,
    });
  };

  return (
    <Pressable
      onPress={onSeeMoreBlockPress}
      style={[styles.seeMoreBlock, { width: width * 0.7, height: height * 0.2 }]}
    >
      <Text style={{ color: '#989BB3' }} variant="outline-sb">
        Смотреть еще {restDataLength}
      </Text>
    </Pressable>
  );
};

export const HorizontalBenefitsList = ({
  benefitsData,
  benefitVariant = 'default',
  listTitle = 'BenefitsList',
  category,
}: HorizontalBenefitsList) => {
  const dataToShow = benefitsData.slice(0, 4);
  const restDataLength = benefitsData.length - dataToShow.length;

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const renderItem = ({ item }: { item: Benefit }) => {
    return <BenefitItem benefit={item} variant={benefitVariant} />;
  };

  const onAllBenefitsBtnPress = () => {
    navigation.navigate(Route.Category, {
      categoryId: category.id,
      categoryLabel: category.title,
    });
  };

  return (
    <View style={styles.horizontalBenefitsList}>
      <View style={styles.horizontalBenefitsListHeader}>
        <Text variant="header_2" style={styles.horizontalBenefitsListTitle}>
          {listTitle}
        </Text>
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
          restDataLength > 0 ? (
            <SeeMoreBlock category={category} restDataLength={restDataLength} />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalBenefitsList: {
    gap: 16,
  },
  horizontalBenefitsListTitle: {},
  horizontalBenefitsListConent: { paddingHorizontal: 16, gap: 8 },
  horizontalBenefitsListHeader: {
    paddingHorizontal: 16,
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
