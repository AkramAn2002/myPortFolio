import React from "react";
import { ImageCircle, NavBar, TextPart } from "./components";
import {
  ContactPage,
  EducationPage,
  HomePage,
  MyProjects,
  Skills,
} from "./pages";
import { PrimeReactProvider } from "primereact/api"; // Assurez-vous d'importer PrimeReactProvider
import "primereact/resources/themes/saga-blue/theme.css"; // ou un autre thème de votre choix
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
const App = () => {
  return (
    <PrimeReactProvider>
      <div className="bg-[#010018]">
        <NavBar />
        <div className="lg:mt-52 mt-16 grid grid-rows-1 gap-16 ">
          <HomePage />
          <EducationPage />
          <Skills />
          <MyProjects />
          <ContactPage />
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default App;
