import styles from "./button.module.css";
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps {
  text?: string;
  variant?: string;
  iconUrl?: string;
  onClick?: () => void;
  isDeleteButton?: boolean;
  imageSize?: number;
  basket?: boolean;
  disabled?: boolean;
}

export default function Button({
  text,
  variant,
  iconUrl,
  onClick,
  isDeleteButton,
  imageSize = 12,
  basket,
  disabled = false,
}: ButtonProps) {
  let style;
  if (variant) style = styles[variant];
  if (basket) style = styles.basket;
  return (
    <button
      className={classNames(
        styles.button,
        isDeleteButton
          ? styles.deleteButton
          : iconUrl
          ? styles.buttonWithIcon
          : styles.buttonWithText,
        style
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconUrl ? (
        <Image src={iconUrl} alt="" width={imageSize} height={imageSize} />
      ) : (
        text
      )}
    </button>
  );
}
