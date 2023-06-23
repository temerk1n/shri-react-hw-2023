import styles from "./button.module.css";
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps {
  text?: string;
  iconUrl?: string;
  onClick: () => void;
  isDeleteButton?: boolean;
}

export default function Button({
  text,
  iconUrl,
  onClick,
  isDeleteButton,
}: ButtonProps) {
  const size = "12";

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
        <Image src={iconUrl} alt="" width={size} height={size} />
      ) : (
        text
      )}
    </button>
  );
}
