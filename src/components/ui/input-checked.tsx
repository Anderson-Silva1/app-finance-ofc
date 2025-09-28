import { useId } from "react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

type InputCheckedProps = {
  name: string;
  labelText: string;
} & React.ComponentProps<"input">;

export const InputChecked = ({ name, labelText }: InputCheckedProps) => {
  const id = useId();

  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Checkbox name={name} id={id} />
      <Label htmlFor={id}>{labelText}</Label>
    </div>
  );
};
