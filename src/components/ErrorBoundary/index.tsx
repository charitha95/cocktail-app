import { useState, useEffect } from "react";
import { ChildrenType } from "../../types";

const ErrorBoundary = ({ children }: ChildrenType): JSX.Element => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleOnError = (): void => {
      setHasError(true);
    };

    window.addEventListener("error", handleOnError);

    return () => {
      window.removeEventListener("error", handleOnError);
    };
  }, []);

  const handleReload = (): void => {
    window.location.href = "/home";
  };

  if (hasError) {
    return (
      <div>
        Something went wrong.
        <button onClick={handleReload}>reload app</button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
