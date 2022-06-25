import Horizontalbar from "../components/Horizontalbar/Horizontalbar";
import Headerbar from "../components/Headerthingys/Headerbar";
import MainBodyPosts from '../components/Adposts/MainBodyPosts';
import { useState } from "react";

const HomePage = (props) => {
    const [category, setCategory] = useState('All');
    const [filter, setFilter] = useState({
        sort: 'clear',
        price: [0, Number.POSITIVE_INFINITY]
    });
    // {
    //     sort: "inc/dec/clear",            // inc means increasing, dec decreasing, clear means sorted by date(fresh reccoss)
    //     price: [min_price, max_price]     // in this price range only.
    // }
    return (
        <div>
            <header>
                <Headerbar user={props.user} />
            </header>
            <div>
                <Horizontalbar setCategory={setCategory} setFilter={setFilter} filter={filter} />
            </div>
            <MainBodyPosts category={category} filter={filter} />
        </div>
    );
}
 
export default HomePage;