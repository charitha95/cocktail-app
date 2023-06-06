import styles from "./style.module.scss";
import GlassIcon from "../../assets/icons/glass.svg";
import Button from "../UIKit/Button";

type EmptyStateProps = {
  message: string;
  hasTryAgainAction?: boolean;
  onAction?: () => void;
};

export default function EmptyState({
  message,
  hasTryAgainAction,
  onAction
}: EmptyStateProps): JSX.Element {
  return (
    <div className={styles["empty-state"]}>
      <div className={styles["wrapper"]}>
        <img src={GlassIcon} alt="glass" />
        <section>
          <span>{message}</span>
          {hasTryAgainAction && (
            <Button variant="primary" name="Try again" onClick={onAction} />
          )}
        </section>
      </div>
    </div>
  );
}
