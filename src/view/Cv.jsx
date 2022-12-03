import React, { Component } from "react";
import { Router } from "react-router-dom";
import pp from "./../img-remove.png";
class Cv extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 gap-5 font-serif m-24 ">
        <div className="col-span-1 pr-5 bg-black pt-5">
          <div>
            <img
              src={pp}
              alt=""
              width={200}
              height={200}
              className="rounded-full mx-10  border-2 border-indigo-600 bg-gray-200"
            />
          </div>
          <div className="bg-black py-2 text-gray-200 ">
            <h3 className="text-center">KONTAK</h3>
            <p>
              <span
                className="bg-cyan-600 px-4  "
                style={{ clipPath: "polygon(0 0, 100% 0, 61% 99%, 0 100%" }}
              >
                <i class="fa-solid fa-phone text-slate-50"></i>
              </span>{" "}
              0853 XXXX XXXX
            </p>
            <p className="flex">
              <span
                className="bg-cyan-600 px-4 "
                style={{ clipPath: "polygon(0 0, 100% 0, 61% 99%, 0 100%" }}
              >
                <i class="fa-solid fa-envelope text-slate-50 "></i>
              </span>
              nizar.tkj2.22@binusasmg.sch.id
            </p>
            <p className="flex">
              <div
                className="bg-cyan-600 px-4 h-[25px]"
                style={{ clipPath: "polygon(0 0, 100% 0, 61% 99%, 0 100%" }}
              >
                <i class="fa-solid fa-location-dot text-slate-50"></i>
              </div>
              Jl.Kemantren Raya No.5 Kota Semarang
            </p>
            <h3 className="text-center">KEMAMPUAN</h3>
            <h3 className="text-center" style={{ marginTop: "-20px" }}>
              BAHASA
            </h3>
            <p>
              Bahasa Indonesia
              <span className="ml-9">100%</span>
              <hr className="border border-2 border-white w-5/5 ml-0" />
            </p>
            <p>
              Bahasa Inggris
              <span className="ml-14">50%</span>
              <hr className="border border-2 border-white w-1/2 ml-0" />
            </p>
            <h3 className="text-center">HOBI</h3>
            <h4>
              <span>
                <i class="fa-sharp fa-solid fa-computer mx-3"></i>
              </span>
              Coding
            </h4>
            <h4>
              <span>
                <i class="fa-solid fa-futbol mx-3"></i>
              </span>
              Bermain Sepak Bola
            </h4>
            <h4>
              <span>
                <i class="fa-solid fa-mobile mx-3"></i>
              </span>
              Bermain Game
            </h4>
          </div>
        </div>
        <div className=" col-span-3 bg-gradient-to-r from-sky-500 to-indigo-500 w-3/4" style={{marginLeft:"-20px"}}>
            <div className="mt-10 ml-12">
            <h2>NIZAR RESTU AJI</h2>
            <div className="bg-gray-900 px-4 w-1/3 p-2 text-white text-2xl mb-4"
                style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)" }}>
                    PROFIL
            </div>
            <div>
                <table>
                    <tr>
                        <th className="text-left">Tempat Tanggal Lahir </th>
                        <td> : Pemalang,14 Agustus 2006</td>
                    </tr>
                    <tr>
                    <th className="text-left">Jenis Kelamin </th>
                        <td> : Laki-Laki</td>
                    </tr>
                    <tr>
                    <th className="text-left">Agama </th>
                        <td> : Islam</td>
                    </tr>
                    <tr>
                    <th className="text-left">Status </th>
                        <td> : Siswa</td>
                    </tr>
                    <tr>
                    <th className="text-left">Kewarganegaraan </th>
                        <td> : Indonesia</td>
                    </tr>
                </table>
            </div>
            <div className="bg-gray-900 px-4 w-1/3 p-2 text-white text-xl my-4"
                style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%" }}>
                    RIWAYAT PENDIDIKAN
            </div>
            <div>
                <table>
                    <tr>
                        <th className="text-left">2013 - 2019</th>
                        <td className="text-left pl-5"> SD Negeri 03 Beji</td>
                    </tr>
                    <tr>
                    <th className="text-left">2019 - 2022</th>
                        <td className="text-left pl-5"> SMP Negeri 03 Taman</td>
                    </tr>
                    <tr>
                    <th className="text-left">2022 - Sekarang</th>
                        <td className="text-left pl-5"> SMK Bina Nusantara Semarang</td>
                    </tr>
                </table>
            </div>
            <div className="bg-gray-900 px-4 w-1/3 p-2 text-white text-xl my-4"
                style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%" }}>
                    BAHASA PEMOGRAMAN
            </div>
            <div>
                <ul>
                    <li>JAVASCRIPT</li>
                    <li>JAVA</li>
                </ul>
            </div>
            <div className="bg-gray-900 px-4 w-1/3 p-2 text-white text-xl my-4"
                style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%" }}>
                    FRAMEWORK
            </div>
            <div>
                <ul>
                    <li>REACT JS</li>
                    <li>VUE JS</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="text-center m-auto">
            <h5  className="text-center">Jika Ingin kembali ke menu awal </h5>
        <a className="text-center bg-slate-600 py-2 px-5 text-zinc-50 no-underline rounded-xl hover:text-stone-800 hover:bg-slate-400 transition-all" href="/">klick disini</a>
        </div>
      </div>
    );
  }
}

export default Cv;
