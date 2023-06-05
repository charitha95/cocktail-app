import { useState, useEffect } from "react";
import { ChildrenType } from "../../types";
import EmptyState from "../EmptyState";

export default function ErrorBoundary({ children }: ChildrenType): JSX.Element {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleOnError = (): void => {
      setHasError(true);
    };

    window.addEventListener("error", handleOnError);

    return () => window.removeEventListener("error", handleOnError);
  }, []);

  const handleReload = (): void => {
    window.location.href = "/home";
  };

  if (hasError) {
    return (
      <div style={{ marginTop: 150 }}>
        <EmptyState
          message="Something went wrong."
          hasTryAgainAction
          onAction={handleReload}
        />
      </div>
    );
  }

  return <>{children}</>;
}
