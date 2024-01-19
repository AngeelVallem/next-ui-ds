import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
    inputSize?: "small" | "medium" | "large";
    shape?: "normal" | "rounded" | "square";
    disabled?: boolean;
    variant?: "flat" | "bordered" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    labelText?: string;
*/

export const FlatDefault: Story = {
  args: {
    labelText: "Primer nombre",
    variant: "flat",
  },
};

export const FlatColorPrimary: Story = {
  args: {
    labelText: "Primer nombre",
    color: "primary",
    variant: "flat",
  },
};

export const FlatColorSecondary: Story = {
  args: {
    labelText: "Primer nombre",
    color: "secondary",
    variant: "flat",
  },
};

export const FlatColorSuccess: Story = {
  args: {
    labelText: "Primer nombre",
    color: "success",
    variant: "flat",
  },
};

export const FlatColorWarning: Story = {
  args: {
    labelText: "Primer nombre",
    color: "warning",
    variant: "flat",
  },
};

export const FlatColorDanger: Story = {
  args: {
    labelText: "Primer nombre",
    color: "danger",
    variant: "flat",
  },
};
