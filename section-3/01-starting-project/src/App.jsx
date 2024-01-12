const reactDescription = ['Core', 'Fundamental', 'Crucial'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = reactDescription[getRandomInt(reactDescription.length)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!!
      </p>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
};

export default App;
