import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const DashboardPage = () => {
  const despesasMensais = 2000;

  const receitasMensais = 2350.23;

  const balance = receitasMensais - despesasMensais;

  return (
    <>
      <Header title="Dashboard" />
      <Container>
        <div>
          <Link href="/transactions/transaction/new">
            <Button>Adicionar Transação</Button>
          </Link>
        </div>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-8">
          <FinanceSummary
            valor={receitasMensais}
            title="Receitas mensais"
            description="Valores ganhos"
            message="Esse mês você ganhou 10% a mais que o mês passado"
          />
          <FinanceSummary
            valor={despesasMensais}
            title="Despesas mensais"
            description="Valores gastos"
            message="Esse mês você gastou 5% a mais que o mês passado"
          />
          <BalanceCard
            valor={balance}
            title="Saldo total"
            description="Saldo total"
            message="Sua saúde financeira está aceitável"
          />
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;

const FinanceSummary = ({
  valor,
  title,
  description,
  message,
}: {
  valor: number;
  title: string;
  description: string;
  message?: string;
}) => {
  return (
    <Card className="min-w-[300px] flex-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">R$ {valor}</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">{message}</p>
      </CardFooter>
    </Card>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-screen-xl p-4">{children}</div>;
};

const balanceCalc = (amount: number) => {
  const color = {
    positive: "text-green-500",
    negative: "text-red-500",
    neutral: "text-gray-500",
  };

  if (amount > 0) {
    return <span className={color.positive}>R$ {amount.toFixed(2)}</span>;
  } else if (amount < 0) {
    return <span className={color.negative}>R$ {amount.toFixed(2)}</span>;
  }

  return <span className={color.neutral}>R$ {amount.toFixed(2)}</span>;
};

const BalanceCard = ({
  valor,
  title,
  description,
  message,
}: {
  valor: number;
  title: string;
  description: string;
  message?: string;
}) => {
  return (
    <Card className="min-w-[300px] flex-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{balanceCalc(valor)}</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">{message}</p>
      </CardFooter>
    </Card>
  );
};
