import clsx from "clsx/lite";
interface Props {
  className: string;
}
const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx("mx-auto max-w-[1420px]", className)}>{children}</div>
  );
};

export default Container;
