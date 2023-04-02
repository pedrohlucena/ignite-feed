import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  const avatar = [styles.avatar, hasBorder && styles.avatarBorder].join(" ");

  return <img className={avatar} {...props} />;
}
