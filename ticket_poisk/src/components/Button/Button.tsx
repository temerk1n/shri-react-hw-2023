import styles from "./button.module.css";
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps {
  text?: string;
  iconUrl?: string;
  onClick?: () => void;
  isDeleteButton?: boolean;
  imageSize?: number;
}

export default function Button({
  text,
  iconUrl,
  onClick,
  isDeleteButton,
  imageSize = 12,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        isDeleteButton
          ? styles.deleteButton
          : iconUrl
          ? styles.buttonWithIcon
          : styles.buttonWithText
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
