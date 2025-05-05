// import React from 'react'
// import Navbar from "./Navbar";
import ApiData from "./checkboxCon/ApiData";
import NavbarTailwind from "./NavbarTailwind";

const Home = () => {
  return (
    <>
      <NavbarTailwind />
      <div
        className="bg-fixed bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5_NISnri-GM35iEcfIERjBpHoutQdWbtEw&s")',
        }}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-dark text-4xl font-bold">Welcome to Home Page</h1>
        </div>
      </div>
      <ApiData />
    </>
  );
};

export default Home;
