import React from 'react';

const Page = () => {
  return (
    <div className="relative bg-[#FFFAFA] w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Círculos decorativos */}
      <div className="
        absolute bg-[#FFC116] rounded-full z-10 aspect-square
        top-[-15vh] left-[-20vw] w-[40vw]
        sm:top-[-10vh] sm:left-[-25vw] sm:w-[50vw]
        md:top-[-12vh] md:left-[-22vw] md:w-[45vw]
        lg:top-[-10vh] lg:left-[-18vw] lg:w-[42vw]
        xl:top-[-15vh] xl:left-[-15vw] xl:w-[40vw]
      "></div>

      <div className="
        absolute bg-[#2C2C32] rounded-full z-0 aspect-square
        bottom-[-35vh] left-[-25vw] w-[65vw]
        sm:bottom-[-30vh] sm:left-[-30vw] sm:w-[75vw]
        md:bottom-[-32vh] md:left-[-28vw] md:w-[70vw]
        lg:bottom-[-30vh] lg:left-[-25vw] lg:w-[65vw]
        xl:bottom-[-35vh] xl:left-[-20vw] xl:w-[65vw]
      "></div>
      {/* Container principal */}
      <div className="
        relative z-10 bg-white rounded-[20px] shadow-[4px_4px_8px_rgba(0,0,0,0.2)] overflow-hidden
        w-[80vw] max-w-[75vw] h-[90.1vh] top-[1.5vh]
        flex flex-col
        lg:w-[80vw] lg:max-w-[75vw] lg:h-auto lg:py-8 lg:px-10 lg:flex-col
        xl:flex-row xl:h-[90vh] xl:p-0
      ">
        {/* Lado esquerdo - Só aparece no xl+ */}
        <div className="
          hidden
          xl:flex xl:flex-col xl:justify-center xl:items-start xl:p-[5vw] xl:gap-4 xl:border-r-2 xl:w-1/2
        ">
          <h1 className="font-normal text-black leading-snug text-[5rem] w-[25vw] text-left">
            Bem-vindo ao <span className="text-[#2C2C32] font-bold">Tareffy</span>
          </h1>
          <p className="text-base text-black text-[1.875rem] text-left">
            Uma <span className="text-[#FFC116] font-normal">ferramenta</span> de organização <br />
            <span className="text-[#FFC116]">feita pra você</span>
          </p>

          {/* Ícone */}
    <div className="
    w-full flex justify-center
    sm:w-full
    md:w-full
    lg:w-full
    xl:w-[30vw]
  ">
    <div className="
      bg-[#FFC116] rounded-full aspect-square flex items-center justify-center mt-6
      w-[20vw]
      sm:w-[30vw]
      md:w-[25vw]
      lg:w-[20vw]
      xl:w-[16.042vw]
    ">
      <img
        src="/raphael_people.svg"
        alt="Ícone de pessoas"
        className="
          object-contain
          w-[60%] h-[60%]
        "
      />
    </div>
  </div>
          </div>

        {/* Área do formulário + Título central */}
        <div className="
          w-full flex flex-col items-center justify-center gap-5 bg-white
          sm:p-4
          md:p-6
          lg:p-6
          xl:w-[40vw] xl:items-start xl:justify-center xl:p-10
        ">
          {/* Título - Exibe só em sm, md, lg */}
          <div className="
            block
            xl:hidden
          ">
            <h1 className="
              text-center font-bold text-black
              text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]
            ">
              Tareffy
            </h1>
          </div>

          {/* Formulário */}
          <form className="
            w-full flex flex-col items-center gap-4
            sm:w-full
            md:w-full
            lg:w-full
            xl:w-full xl:items-start
          ">
            <div className="w-full">
              <label htmlFor="email" className="
                block text-gray-700 mb-1
                text-sm
                sm:text-base
                md:text-lg
              ">
                Nome de usuário ou e-mail
              </label>
              <input
                type="text"
                id="email"
                className="
                  rounded-md border border-gray-300 shadow-sm focus:ring-[#FFC116] focus:border-[#FFC116] p-2
                  w-full
                  sm:text-sm
                  md:text-base
                  xl:w-[30vw]
                "
              />
            </div>

            <div className="w-full">
              <label htmlFor="senha" className="
                block text-gray-700 mb-1
                text-sm
                sm:text-base
                md:text-lg
              ">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="
                  rounded-md border border-gray-300 shadow-sm focus:ring-[#FFC116] focus:border-[#FFC116] p-2
                  w-full
                  sm:text-sm
                  md:text-base
                  xl:w-[30vw]
                "
              />
            </div>

            <button
              type="submit"
              className="
                bg-[#2C2C32] text-white py-2 px-4 rounded-md shadow hover:bg-black transition
                w-full
                sm:text-sm
                md:text-base
                xl:w-[30vw]
              "
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
