import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type InputSelectProps = {
  name: string;
  labelText: string;
  items: itemsProps[];
} & React.ComponentProps<"input">;

type itemsProps = {
  id: number;
  value: string;
  text: string;
  defaultChecked?: boolean;
};

export const InputSelect = ({ name, labelText, items }: InputSelectProps) => {
  return (
    <div className="flex w-full max-w-sm items-center">
      <Select name={name}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={labelText} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => {
            return (
              <SelectItem
                value={item.value}
                key={item.id}
                defaultChecked={!!item.defaultChecked}
              >
                {item.text}
              </SelectItem>
            );
          })}

          {/* <SelectItem value="expense">Despesa</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
};
