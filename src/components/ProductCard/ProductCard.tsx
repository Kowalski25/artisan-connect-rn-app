import React, { memo } from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { IProductCardProps } from "./ProductCard.types";
import styles from "./ProductCard.styles";

const ProductCard = memo<IProductCardProps>(() => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Image />
        <Text>Product Card</Text>
        <Text>Price: $20.55</Text>
      </View>
    </Pressable>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
