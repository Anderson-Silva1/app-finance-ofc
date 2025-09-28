import { useId } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type InputTextProps = {
  labelText: string;
  readonly?: boolean;
  name: string;
  hidden?: boolean;
} & React.ComponentProps<"input">;

export const InputText = ({
  labelText,
  readonly,
  name,
  hidden,
  ...props
}: InputTextProps) => {
  const id = useId();
  return (
    <div
      className={`${hidden ? "hidden" : "flex w-full max-w-sm flex-col justify-center gap-3"}`}
    >
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        className={`${readonly ?? "read-only:text-amber-300"}`}
        type="text"
        name={name}
        {...props}
      />
    </div>
  );
};
