import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import { GlobalStyle } from './constants/globalStyle';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <List />
      <Footer />
    </>
  );
};

export default App;
