import './../front/started.css'
import Rocket from './../../../../img/RocketLaunch.png'
import Nft from "./../../../../img/nft1.png"
import Avatar from './../../../../img/Avatar.png'

const Started = () => {
    return ( 
        <section className="started">
            <div className="start_cont">
                <h1 className='start_h1'>Discover<br/> digital art &<br/> Collect NFTs</h1>
                <p className='start_text'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <a href="#!" className='start_button'><img src={Rocket} className='rocket_img' alt="rocket" />Get Started</a>
                <div className="ul">
                    <div className="mini_ul">
                    <ul>
                        <li><h4 className='ul_start_h4'>240k+</h4></li>
                        <li className='ul_start_text'>Total Sale</li>
                    </ul>
                    </div>
                    <div className="mini_ul">
                    <ul>
                        <li><h4 className='ul_start_h4'>100k+</h4></li>
                        <li className='ul_start_text'>Auctions</li>
                    </ul>
                    </div>
                    <div className="mini_ul">
                    <ul>
                        <li><h4 className='ul_start_h4'>240k+</h4></li>
                        <li className='ul_start_text'>Artists</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="nft_card">
                <img className='nft' src={Nft} alt="nft" />
                <div className="nft_text">
                    <h5 className='nft_h5'>Space Walking </h5>
                    <div className="nft_avatar">
                        <img src={Avatar} alt="avatar" />
                        <p className='nft_logo_text'>Animakid</p>
                    </div>
                </div>
            </div>
        </section>
     ); 
}
 
export default Started;