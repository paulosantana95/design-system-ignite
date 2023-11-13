import { styled } from "@stitches/react";
import { ComponentProps } from "react";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$ignite500",
  border: "1px solid $gray600",
});

export type BoxProps = ComponentProps<typeof Box>;
