import React, { forwardRef, useId } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";

export const InputMoney = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <div className="flex w-full max-w-sm items-center gap-3">
        <Label htmlFor={id}>Valor</Label>
        <NumericFormat
          {...props}
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          allowNegative={false}
          customInput={Input}
          getInputRef={ref}
          name="amount-transaction"
          defaultValue={""}
          placeholder="R$ 0"
          id={id}
        />
      </div>
    );
  },
);

InputMoney.displayName = "InputMoney";
