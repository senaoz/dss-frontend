import House from "./components/house";

function App() {
  return (
    <div className="prose container mx-auto p-8 max-w-6xl space-y-4">
      <header className="flex justify-between items-center">
        <h1 className=" font-normal">
          Smart<b>Housing</b>Insights
        </h1>
        <nav className="space-x-4">
          <a href="#" className="uppercase ">
            Button
          </a>
          <a href="#" className="uppercase">
            Button
          </a>
          <a href="#" className="uppercase button">
            Button
          </a>
        </nav>
      </header>
      <main>
        <div
          className="flex justify-between items-center p-4 rounded-lg bg-[url('./assets/images/banner.png')]"
          id="hero"
        >
          <h1 className="text-4xl font-bold">Smart Housing Insights</h1>
          <a href="#" className="uppercase button">
            Button
          </a>
        </div>
        <h2 className="text-2xl font-bold">
          Welcome to Smart Housing Insights
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          eleifend, augue eu vulputate lacinia, ipsum sapien ultricies dolor, ut
          mollis diam risus quis purus. Nulla facilisi. Donec vitae velit sed
          dolor aliquet ultricies. Donec euismod ullamcorper mauris, non luctus
          nunc. Sed euismod, nisl quis lacinia dapibus, ipsum velit ultricies
          libero
        </p>
      </main>

      <House />
    </div>
  );
}

export default App;
