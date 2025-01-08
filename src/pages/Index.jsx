import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Index = () => {
  return (
    <section className="max-w-[1450px] mx-auto relative overflow-hidden">
      <Header />
      <section className="absolute md:top-[-18rem] md:left-[-10rem] left-[-20rem] top-[-15rem]">
          <div className="w-[50rem] h-[50rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
          <div className="w-[45rem] h-[45rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
          <div className="w-[40rem] h-[40rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-[0.05]"></div>
          <div className="w-[35rem] h-[35rem] z-20 rounded-[50%] absolute bg-[#2BB32A] opacity-10"></div>
        </section>

      <Outlet />
      <Footer />
    </section>
  );
};

export default Index;
