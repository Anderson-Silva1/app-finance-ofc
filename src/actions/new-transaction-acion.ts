"use server";

export const newTransactionAction = async (formFata: FormData) => {
  const id = formFata.get("id-transaction");
  const userId = formFata.get("userId");
  const title = formFata.get("title-transaction");
  const description = formFata.get("description-transaction");
  const amount = formFata.get("amount-transaction");
  const type = formFata.get("type-transaction");
  const category = formFata.get("category-transaction");
  const pending = formFata.get("pending-transaction");
  const created_at = formFata.get("created-at-transaction");
  const update_at = formFata.get("updated-at-transaction");

  const transaction = {
    id,
    userId,
    title,
    description,
    amount,
    type,
    category,
    pending,
    created_at,
    update_at,
  };

  console.log(transaction);

  // TODO: Verificar se usuário está logado

  // TODO: Verificar permissão de criação de transação para o usuário

  // TODO: Usar UUID para campos de id

  setInterval(() => {
    console.log("Início do Delay");
  }, 5000);
};

/*
id: text("id").primaryKey().notNull(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  amount: text("amount").notNull(),
  type: text("type").notNull(),
  category: text("category").notNull(),
  pending: integer("pending", { mode: "boolean" }).notNull(),
  createdAt: text("created_at").notNull(),
  updateAt: text("update_at").notNull(),
*/
