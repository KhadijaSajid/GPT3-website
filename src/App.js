import './App.css';
import { Blog, Footer, FutureDiv, Header, Navbar, Possibilty, Register, Tags, WhatisGPT } from './container'

function App() {
  return (
    <>
      <div className='WhatisGPt-gradient '>
        < Navbar />
        < Header />
      </div>
      <Tags />
      <WhatisGPT />
      <FutureDiv />
      <Possibilty />
      <Register />
      <Blog />
      <Footer />



    </>
  );
}

export default App;
