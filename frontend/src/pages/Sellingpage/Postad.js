import classes from './Postad.module.css';
import HeaderforPostad from './HeaderforPostad';
import Bodyforsellingpage from './Bodyforsellingpage';

const Postad = () => {
    return (
        <div>
            <header>
                <HeaderforPostad />
            </header>
            <main>
                <Bodyforsellingpage />
            </main>
        </div>
    );
}

export default Postad;
