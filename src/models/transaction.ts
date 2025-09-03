import { TransactionCategory } from "@/models/category";
import { TransactionType } from "@/models/type";

export type Transaction = {
  id: string; // identificador único (ex: UUID)
  usuarioId?: string;
  titulo: string; // nome curto (ex: "Salário", "Mercado")
  descricao?: string; // detalhamento opcional
  valor: number; // valor numérico positivo
  tipo: TransactionType;
  categoria: TransactionCategory;
  dataCriacao: Date; // quando foi criada
  dataAtualizacao: Date; // última modificação
};
