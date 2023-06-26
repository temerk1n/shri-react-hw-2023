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
}

export default function Button({
  text,
  variant,
  iconUrl,
  onClick,
  isDeleteButton,
  imageSize = 12,
  basket,
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
    >
      {iconUrl ? (
        <Image src={iconUrl} alt="" width={imageSize} height={imageSize} />
      ) : (
        text
      )}
    </button>
  );
}
