import { useEffect } from "react";

// custom hook to show warning when page reloads
export default function useUnloadWarning(condition = true) {
  useEffect(() => {
    if (!condition) {
      return;
    }
    const listener = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", listener);

    return () => window.removeEventListener("beforeunload", listener);
  }, [condition]);
}
