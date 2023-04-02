import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  avatarUrl: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, avatarUrl, alt }: AvatarProps) {
  const avatar = [styles.avatar, hasBorder && styles.avatarBorder].join(" ");

  return <img className={avatar} src={avatarUrl} alt={alt} />;
}
