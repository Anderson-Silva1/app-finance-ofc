"use client";

import { newTransactionAction } from "@/actions/new-transaction-acion";
import { Transaction } from "@/models/transaction";
import { useState, useTransition } from "react";
import { InputMoney } from "./input-money";
import { InputSelect } from "./input-select";
import { InputText } from "./input-text";
import { Button } from "./ui/button";
import { InputChecked } from "./ui/input-checked";

const NewTransaction = () => {
  const [pending, startTransition] = useTransition();
  const [transaction, setTransaction] = useState<Transaction>({
    id: "ID Gerado automáticamente",
    title: "",
    userId: "USERID Gerado automáticamente",
    amount: 0,
    category: "other",
    type: "income",
    description: "",
    pending: false,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  });

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <form
        action={(formData: FormData) => {
          startTransition(async () => {
            const response = await newTransactionAction(formData);
          });
        }}
        className="mx-auto my-8 flex w-full flex-col items-center justify-center gap-8"
      >
        <InputText
          labelText="ID (Gerado altomátiamente)"
          readOnly
          name="id-transaction"
          defaultValue={transaction.id}
          placeholder="ID será gerado automáticamente"
          // hidden
          disabled={pending}
        />

        <InputText
          labelText="userId (Gerado altomátiamente)"
          readOnly
          name="userId"
          defaultValue={transaction.userId}
          placeholder="userId será gerado automáticamente"
          // hidden
          disabled={pending}
        />

        <InputText
          labelText="Título da Transação"
          name="title-transaction"
          placeholder="Digite o título aqui..."
          disabled={pending}
          defaultValue={transaction.title}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputText
          labelText="Descrição da Transação"
          name="description-transaction"
          placeholder="Digite a descrição aqui..."
          disabled={pending}
          defaultValue={transaction.description}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputMoney
          disabled={pending}
          defaultValue={transaction.amount}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputSelect
          name="type-transaction"
          labelText="Tipo"
          items={[
            { id: 1, text: "Receita", value: "income", defaultChecked: true },
            { id: 2, text: "Despesa", value: "expense", defaultChecked: false },
          ]}
          disabled={pending}
          defaultValue={transaction.type}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputSelect
          name="category-transaction"
          labelText="Categoria"
          items={[
            {
              id: 1,
              text: "Transport",
              value: "transport",
              defaultChecked: true,
            },
            {
              id: 2,
              text: "Entretenimento",
              value: "entertainment",
              defaultChecked: false,
            },
            {
              id: 3,
              text: "Saúde",
              value: "health",
              defaultChecked: false,
            },
          ]}
          disabled={pending}
          defaultValue={transaction.category}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputChecked
          name="pending-transaction"
          labelText="Pendente?"
          disabled={pending}
          defaultChecked={transaction.pending}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputText
          labelText="createdAt"
          readOnly
          name="created-at-transaction"
          placeholder="Valor de created-at-transaction"
          // hidden
          disabled={pending}
          defaultValue={transaction.createdAt}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <InputText
          labelText="updated-at-transaction"
          readOnly
          name="updated-at-transaction"
          placeholder="userId será gerado automáticamente"
          // hidden
          disabled={pending}
          defaultValue={transaction.updatedAt}
          onChange={(e) => {
            setTransaction((prevState) => {
              return { ...prevState, title: e.target.value };
            });
          }}
        />

        <div className="flex">
          <Button
            variant={"default"}
            className="self-start"
            type="submit"
            disabled={pending}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewTransaction;
