import '../App.css';
import '../styles/home.css'
import '../styles/references.css'
import Header from '../components/Header';

function References() {
    return(
        <div className="home_div">
            <Header />
            <div className='section_main_text'>
                <h3>Participantes</h3>
                <ul>
                    <li>
                        <p className='name'>Elislayne Brasil de Lima</p>
                    </li>
                    <li>
                        <p className='name'>Emilie Goeten Pazolini</p>
                    </li>
                    <li>
                        <p className='name'>Peterson Paganelli</p>
                    </li>
                    <li>
                        <p className='name'>Victor André Uller</p>
                    </li>
                    <li>
                        <p className='name'>Vinícius Schütz Piva</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default References;