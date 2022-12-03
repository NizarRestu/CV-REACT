import pp from "./../img-remove.png";
import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
    <div  className="flex columns-lg justify-items-center  justify-center py-14 mx-auto" style={{width:800}}>
      <div className="my-5">
        <p className="font-bold ">Hello Guys</p>
        <div className="box-columns-12">
          <h1>
            Kenalin saya
            <span className="font-bold">
              <span className="text-red-700" > Nizar</span> Restu
               Aji
            </span>
          </h1>
          <p>Saya sedang melakukan pelatihan Bootcamp di Smk Bina Nusantara Semarang. Saya kali ini disuruh membuat Cv</p>
          <h5>Ini beberapa yang saya pelejari di Bootcamp</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>VUE JS</li>
            <li>MY SQL</li>
            <li>JAVA SPRING BOOT</li>
            <li>REACT JS</li>
          </ul>
          <h5 className="mb-10">Jika ingin mengetahui lebih detail tentang saya</h5>
          <a className="ml-36 bg-slate-600 py-2 px-5 text-zinc-50 no-underline rounded-xl hover:text-stone-800 hover:bg-slate-400 transition-all" href="/cv">klick disini</a>
        </div>
      </div>
      <img className="mr-29" src={pp} alt="" width={300} height={400} />
    </div>
    </div>
  );
}

export default About;
