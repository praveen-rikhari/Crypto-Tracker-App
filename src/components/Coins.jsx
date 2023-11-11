import { Link } from "react-router-dom";
import Coin from "../Routes/Coin";
import CoinItem from "./CoinItem";
import './Coins.css'

function Coins(props) {
    return (
        <div className="container">
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24H</p>
                    <p className='hide-mobile' >Volume</p>
                    <p className='hide-mobile' >Mkt Cap</p>
                </div>

                {
                    props.coins.map(c => {
                        return (
                            <Link to={`/coin/${c.id}`} element={<Coin />} key={c.id}>
                                <CoinItem coins={c} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Coins;