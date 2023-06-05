import classes from "./style.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type DrinkCardSkeletonProps = {
  colClass?: string;
};

export default function DrinkCardSkeleton({
  colClass = "col-12 col-md-4"
}: DrinkCardSkeletonProps): JSX.Element {
  return (
    <div className={`${classes.skeleton} ${colClass}`}>
      <SkeletonTheme baseColor="#E7EEF3" highlightColor="#E0E8ED">
        <Skeleton height={150} width="100%" />
        <Skeleton count={2} className={classes.detail} />
      </SkeletonTheme>
    </div>
  );
}
