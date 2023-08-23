import React from 'react'
import './main.css'
import img from '../logo.png'
import img1 from '../TH.png'
import img2 from '../download.jpg'
import img3 from '../daf.png'



const Main = () => {
  return (
    <main>

    <div className='containerMain'>
       <div className="main">
        <div>
            <h1>Letris Tours</h1>
            <h3>
                Traveling - it leaves you apeechless,then truns you into a storyteller - ibn Battuba
            </h3>
            <p>Website Created by : M.Prima</p>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
       </div>
    </div>
    <div className='ten'>
        <h3>Tentang Kami</h3>
        <p>
SMK Letris indonesia 2, adalah sekolah yang telah terakreditasi A, mempunyai 7 jurusan yaitu multimedia, rekayasa perangkat lunak, teknik komputer jaringan, administrasi perkantoran, bisnis daring dan pemasaran, akuntansi, dan perbankan syariah.SMK LETRIS INDONESIA 2 akan mengadakan study tours ke Bali dengan siswa-siswi angkatan tahun 2022-2025 pada tanggal 20 Juni 2025</p>
    </div>
        <div className='spon'>
            <h1 className='prim'>Sponsor By:</h1>
            <img src={img1} alt="" className='img1'/>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    </main>
  )
}

export default Main