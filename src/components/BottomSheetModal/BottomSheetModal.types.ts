import { ReactNode } from "react";
import { BottomSheetProps } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

export interface IBottomSheetModalProps {
  onClose: () => void;
  safeAreaBottomInset?: true;
  children: ReactNode;
  snapPoints?: (string | number)[];
  isDynamicSnapPoints?: boolean;
  backdropProps?: Partial<BottomSheetDefaultBackdropProps>;
  hasCloseButton?: boolean;
  title?: string;
  footerComponent?: BottomSheetProps["footerComponent"];
}
