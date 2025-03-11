export interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    borderRadius?: string;
    fontColor?: string;
    style?: React.CSSProperties;
  }
  