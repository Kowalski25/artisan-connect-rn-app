import React, { memo, useMemo, useRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IBottomSheetModalProps } from "./BottomSheetModal.types";
import styles from "./BottomSheetModal.styles";

const BottomSheetModal = memo<IBottomSheetModalProps>(
  ({
    onClose,
    children,
    safeAreaBottomInset,
    snapPoints = ["50%"],
    isDynamicSnapPoints = true,
    backdropProps,
    title = "",
  }) => {
    const ref = useRef<BottomSheet>(null);
    const { bottom } = useSafeAreaInsets();

    const initialSnapPoints = useMemo(
      () => (isDynamicSnapPoints ? ["CONTENT_HEIGHT"] : snapPoints),
      [isDynamicSnapPoints, snapPoints],
    );

    return (
      <BottomSheet
        ref={ref}
        onClose={onClose}
        enablePanDownToClose
        snapPoints={snapPoints}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            disappearsOnIndex={1}
            appearsOnIndex={0}
            opacity={0.5}
            {...backdropProps}
            {...props}
          />
        )}
      >
        <BottomSheetView
          style={[
            styles.content,
            safeAreaBottomInset && {
              paddingBottom: Math.max(bottom, 34),
            },
          ]}
        >
          {children}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

BottomSheetModal.displayName = "BottomSheetModal";

export default BottomSheetModal;
