import clsx from "clsx";

export function Banner({ status, children }) {
  return (
    <div role="alert" className={clsx("banner", status)}>
      {children}
    </div>
  );
}
