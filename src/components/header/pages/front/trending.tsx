import './../front/trending.css'
import big_image1 from '../../../../img/big_image1.svg'
import big_image2 from '../../../../img/big_image2.svg'
import big_image3 from '../../../../img/big_image3.svg'

const Trending = () => {
    return(
    <div className="trending">
        <div className="trendText">
            Trending Collection
        </div>
        <div className="trendText2">
            Checkout our weekly updated trending collection.
        </div>
        <div className="card-row">
            <div className="card">
                <img className="big-image" src={big_image1} alt="Big Image 1"/>
            </div>

            <div className="card">
                <img className="big-image" src={big_image2} alt="Big Image 2"/>
            </div>

            <div className="card">
                <img className="big-image" src={big_image3} alt="Big Image 3"/>
            </div>

        </div>
    </div>
    );
}

export default Trending;