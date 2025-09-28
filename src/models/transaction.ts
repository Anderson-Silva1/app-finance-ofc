import { TransactionCategory } from "@/models/category";
import { TransactionType } from "@/models/type";

export type Transaction = {
  id: string; // unique identifier (e.g., UUID)
  userId?: string;
  title: string; // short name (e.g., "Salary", "Groceries")
  description?: string; // optional detailed description
  amount: number; // positive numeric value
  type: TransactionType; // "income" or "expense"
  category: TransactionCategory; // transaction category
  pending: boolean;
  createdAt: string; // when it was created
  updatedAt: string; // last modification
};

// export type CreateTransactionDTO = Omit<
//   Transaction,
//   "id" | "createdAt" | "updatedAt"
// >;

// export type UpdateTransactionDTO = Partial<CreateTransactionDTO> & {
//   id: string;
// };
