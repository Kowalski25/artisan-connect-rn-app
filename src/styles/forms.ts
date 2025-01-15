import { TextStyle } from "react-native";

import * as Colors from "./colors";
import * as Outlines from "./outlines";
import * as Sizing from "./sizing";
import * as Typography from "./typography";

// TODO - Add more variants based on final design.
type Input = "primary";
export const input: Record<Input, TextStyle> = {
  primary: {
    borderColor: Colors.neutral.s300,
    borderRadius: Outlines.borderRadius.small,
    borderWidth: Outlines.borderWidth.hairline,
    ...Typography.body.x30,
    lineHeight: 0,
    padding: Sizing.x20,
  },
};

type InputLabel = "primary";
export const inputLabel: Record<InputLabel, TextStyle> = {
  primary: {
    ...Typography.subheader.x20,
    marginBottom: Sizing.x10,
  },
};
