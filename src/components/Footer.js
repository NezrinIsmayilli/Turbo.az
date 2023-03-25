import React from 'react'
import img1 from '../../assets/img/logo.gif'


const Footer = () => {
    return (
        <div className='footer '>
            <div className="first">
                <p>Reklam yerləşdirin</p>
             <div className="icons">
             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><p>turbo@turbo.az </p>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>(012) 599-08-01<br />(012) 505-77-55 */}
           
             </div>
            </div>
            <div className="list1">
                <div className="one">
                    <ul>
                        <li>Abarth(3)</li>
                        <li>Alfa Romeo(10)</li>
                        <li>Aprilia
                            (3</li>
                        <li>Aston Martin
                            (1)</li>
                        <li>Audi
                            (284)</li>
                        <li>Avia
                            (1)</li>
                        <li>Baic
                            (26)</li>
                        <li>Bajaj
                            (9)</li>
                        <li>Bentley
                            (41)</li>
                        <li>Bestune
                            (17)</li>
                        <li>BMC
                            (2)</li>
                        <li>BMW
                            (2277)</li>
                        <li>BMW Alpina
                            (1)</li>
                        <li>Brilliance
                            (3)</li>
                        <li>Buick
                            (2)</li>
                        <li>Bull Motors
                            (1)</li>
                        <li>BYD
                            (23)</li>
                        <li>C.Moto
                            (13)</li>
                        <li>Cadillac
                            (27)</li>
                        <li>Cevo
                            (1)</li>
                        <li>CFMOTO
                            (10)</li>
                        <li>Changan
                            (113)</li>
                        <li>Chery
                            (98)</li>
                        <li>Chevrolet
                            (1598)</li>
                        <li>Chrysler
                            (12)</li>
                    </ul>
                </div>
                {/* 2 */}
                <div className="two">
                    <ul>
                        <li>Citroen
                            (15)</li>
                        <li>Dacia
                            (39)</li>
                        <li>Daewoo
                            (351)</li>
                        <li>DAF
                            (70)</li>
                        <li>Daihatsu
                            (1)</li>
                        <li>Dayun
                            (1)</li>
                        <li>DFSK
                            (10)</li>
                        <li>Dnepr
                            (8)</li>
                        <li>Dodge
                            (40)</li>
                        <li>DongFeng
                            (16)</li>
                        <li>Ducati
                            (2)</li>
                        <li>FAW
                            (9)</li>
                        <li>Ferrari
                            (2)</li>
                        <li>Fiat
                            (155)</li>
                        <li>Ford
                            (1413)</li>
                        <li>Foton
                            (15)</li>
                        <li>Gabro
                            (1)</li>
                        <li>GAC
                            (11)</li>
                        <li>GAZ
                            (731)</li>
                        <li>Geely
                            (55)</li>
                        <li>Genesis
                            (4)</li>
                        <li>GIBBS
                            (1)</li>
                        <li>GMC
                            (17)</li>
                        <li>Great Wall
                            (47)</li>
                        <li>Haima
                            (3)</li>

                    </ul>
                </div>
                <div className="three">
                    <ul>
                        <li>Haojue
                            (6)</li>
                        <li>Harley-Davidson
                            (7)</li>
                        <li>Haval
                            (54)</li>
                        <li>Honda
                            (323)</li>
                        <li>Hongqi
                            (13)</li>
                        <li>HOWO
                            (22)</li>
                        <li>Hozon
                            (2)</li>
                        <li>Hummer
                            (19)</li>
                        <li>Hyundai
                            (3770)</li>
                        <li>IJ
                            (12)</li>
                        <li>Infiniti
                            (121)</li>
                        <li>Iran Khodro
                            (102)</li>
                        <li>Isuzu
                            (46)</li>
                        <li>ItalCar
                            (1)</li>
                        <li>Iveco
                            (28)</li>
                        <li>JAC
                            (19)</li>
                        <li>Jaguar
                            (26)</li>
                        <li>Jeep
                            (189)</li>
                        <li>Jetour
                            (12)</li>
                        <li>Jianshe
                            (1)</li>
                        <li>JMC
                            (1)</li>
                        <li>Jonway
                            (2)</li>
                        <li>KAIYI
                            (1)</li>
                        <li>KamAz
                            (170)</li>
                        <li>Kanuni
                            (4)</li>

                    </ul>
                </div>
                <div className="four">
                    <ul>
                        <li>KAvZ
                            (1)</li>
                        <li>Kawasaki
                            (6)</li>
                        <li>KAZ
                            (1)</li>
                        <li>Keeway
                            (2)</li>
                        <li>Khazar
                            (139)</li>
                        <li>Kia
                            (3018)</li>
                        <li>KrAZ
                            (3)</li>
                        <li>Kuba
                            (5)</li>
                        <li>LADA (VAZ)
                            (5467)</li>
                        <li>Lamborghini
                            (4)</li>
                        <li>Land Rover
                            (743)</li>
                        <li>Lexus
                            (528)</li>
                        <li>Lifan
                            (31)</li>
                        <li>Lincoln
                            (13)</li>
                        <li>LuAz
                            (4)</li>
                        <li>Mack
                            (2)</li>
                        <li>MAN
                            (34)</li>
                        <li>Maserati
                            (18)</li>
                        <li>MAZ
                            (27)</li>
                        <li>Mazda
                            (169)</li>
                        <li>McLaren
                            (1)</li>
                        <li>Mercedes
                            (6645)</li>
                        <li>Mercedes-Maybach
                            (23)</li>
                        <li>Mercury
                            (1)</li>
                        <li>MG
                            (27)</li>

                    </ul>
                </div>
                <div className="five">
                    <ul>
                        <li>Mini
                            (23)
                            (1)</li>
                        <li>Minsk
                            (5)
                        </li>
                        <li>Mitsubishi
                            (590) </li>
                        <li>Mondial
                            (11)</li>
                        <li>Moskvich
                            (27)</li>
                        <li>Muravey
                            (20)</li>
                        <li>MV Agusta
                            (1)</li>
                        <li>Nama
                            (3)</li>
                        <li>Nissan
                            (1174)</li>
                        <li>NIU
                            (1)</li>
                        <li>Oldsmobile
                            (1)</li>
                        <li>Opel
                            (2463)</li>
                        <li>PAZ
                            (4)</li>
                        <li>Peugeot
                            (61)
                        </li>
                        <li>Piaggio
                            (1)</li>
                        <li>Polaris
                            (3)</li>
                        <li>Polestar
                            (4)</li>
                        <li>Porsche
                            (190)</li>
                        <li>RAF
                            (4)</li>
                        <li>Ravon
                            (63)</li>
                        <li>Renault
                            (319)</li>
                        <li>RKS
                            (5)</li>
                        <li>Rolls-Royce
                            (2)</li>
                        <li>Rover
                            (3)
                        </li>
                        <li>Saab
                            (2)</li>
                    </ul>
                </div>
                <div className="six">
                    <ul>
                        <li>Saipa
                            (89)</li>
                        <li>SamAuto
                            (3)
                        </li>
                        <li>Saturn
                            (2) </li>
                        <li>Scania
                            (33)</li>
                        <li>Scion
                            (1)</li>
                        <li>SEAT
                            (29)</li>
                        <li>Setra
                            (1)</li>
                        <li>Shacman
                            (20)</li>
                        <li>Shaolin
                            (2)</li>
                        <li>Skoda
                            (63)</li>
                        <li>Skywell
                            (4)</li>
                        <li>Smart
                            (4)</li>
                        <li>Soueast
                            (6)</li>
                        <li>Ssang Yong
                            (23)

                        </li>
                        <li>Subaru
                            (62)</li>
                        <li>Suzuki
                            (41)</li>
                        <li>SYM
                            (1)</li>
                        <li>Tesla
                            (20)</li>
                        <li>Tofas
                            (187)</li>
                        <li>Toyota
                            (2895)</li>
                        <li>Triumph
                            (2)</li>
                        <li>Tufan
                            (15)</li>
                        <li>UAZ
                            (52)</li>
                        <li>Ural
                            (6)
                        </li>
                        <li>Vespa
                            (1)</li>
                    </ul>
                </div>
                <div className="seven">
                    <ul>
                        <li>VGV
                            (2)</li>
                        <li>Volkswagen
                            (807)
                        </li>
                        <li>Volvo
                            (87)</li>
                        <li>Vosxod
                            (2)</li>
                        <li>Wuling
                            (5)</li>
                        <li>Yamaha
                            (21)</li>
                        <li>ZAZ
                            (29)</li>
                        <li>Zeekr
                            (1)</li>
                        <li>ZIL
                            (57)</li>
                        <li>Zongshen
                            (1)</li>
                        <li>Zontes
                            (12)</li>
                        <li>ZX Auto
                            (3)</li>
                        <div className='img'><li><img src={img1} alt="" /></li></div>
                    </ul>
                </div>
            </div>
            <div className="list2 container">
                <ul>
                    <li>Qaydalar</li>
                    <li>Qanun</li>
                    <li>İstifadəçi razılaşması</li>
                    <li>Məxfilik siyasəti</li>
                </ul>
            </div>
            <div className="list3 container">
                <p>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</p>
               <div className="nav">
               <ul>
                    <li>2006-2023 Digital Classifieds MMC. VÖEN: 1405631661</li>
                </ul>
                <ul>
                <li className='mobile'>Mobil versiyası</li>
                </ul>
               </div>
            </div>
        </div>
    )
}

export default Footer