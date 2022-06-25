import Horizontalbar from "../components/Horizontalbar/Horizontalbar";
import Mainbody from "../components/Mainbody/Mainbody";
import Headerbar from "../components/Headerthingys/Headerbar";


const HomePage = (props) => {
    return (
        <div>
            <header>
                <Headerbar user={props.user} />
            </header>
            <div>
                <Horizontalbar />
            </div>
            <Mainbody />
        </div>
    );
}
 
export default HomePage;