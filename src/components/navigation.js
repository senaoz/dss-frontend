const Navigation = () => {
  const navigation = [
    { name: "PowerBI", href: "/#PowerBI" },
    { name: "Aim Of Project", href: "/#aim" },
    { name: "Data", href: "/#data" },
  ];

  return (
    <header className="flex justify-between items-center absolute inset-x-0 top-0 z-50 p-10">
      <a href="/">
        <h2 className="font-normal">
          Smart<b>Housing</b>Insights
        </h2>
      </a>
      <nav className="space-x-4">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="uppercase">
            {item.name}
          </a>
        ))}

        <a href="/#predict" className="uppercase button">
          Predict
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
