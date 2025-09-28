type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex min-h-16 min-w-full items-center justify-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
