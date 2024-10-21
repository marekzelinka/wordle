import clsx from "clsx";

export function Banner({ status, children }) {
  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 mx-auto max-w-[600px] rounded-t-md p-8 text-center will-change-transform",
        {
          "bg-green-800 text-white": status === "happy",
          "bg-red-800 text-white": status === "sad",
        },
      )}
    >
      {children}
    </div>
  );
}
