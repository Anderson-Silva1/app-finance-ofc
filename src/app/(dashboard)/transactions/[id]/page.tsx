type TransactionPageProps = {
  params: Promise<{ id: string }>;
};

const TransactionPage = async ({ params }: TransactionPageProps) => {
  const { id } = await params;

  return (
    <>
      <h1>TransactionPage ID: {id}</h1>
    </>
  );
};

export default TransactionPage;
