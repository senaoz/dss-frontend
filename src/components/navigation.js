const Navigation = () => {
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <header className="flex justify-between items-center absolute inset-x-0 top-0 z-50 p-10">
      <h2 className="font-normal">
        Smart<b>Housing</b>Insights
      </h2>
      <nav className="space-x-4">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="uppercase">
            {item.name}
          </a>
        ))}

        <a href="#" className="uppercase button">
          Button
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
