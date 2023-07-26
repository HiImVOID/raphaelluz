import Image from "next/image";
import Perfil from "@/../public/Profile.jpg";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center ">
      <main className="flex-col px-8 w-full justify-between">
        <h2 className="font-bold text-4xl justify-center flex">Quem sou?</h2>
        <br />
        <br />
        <div className=" flex items-center justify-center">
          <p className=" w-[60%]">
            Sou um desenvolvedor <span className="font-bold">Front End</span>,
            bacharelando em{" "}
            <span className="font-bold">Ciências da Computação </span>&{" "}
            <span className="font-bold">Psicologia</span>, trabalho como{" "}
            <span className="font-bold">freelancer</span>, buscando uma
            oportunidade de{" "}
            <span className="font-bold">trabalhar em projetos maiores</span>,
            vivo atualmente em São Paulo - SP
          </p>
        </div>
      </main>
      <aside>
        <Image
          src={Perfil}
          width={400}
          height={400}
          alt={"Perfil"}
          className="rounded-full border-dashed border-4 border-white "
        />
      </aside>
    </div>
  );
};

export default About;
