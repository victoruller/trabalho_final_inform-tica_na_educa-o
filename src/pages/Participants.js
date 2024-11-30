import '../App.css';
import '../styles/home.css'
import '../styles/references.css'
import Header from '../components/Header';

function References() {
    return(
        
        <div class="parallax">
            <div className="home_div">
                <Header />
                <section className='section_main_text'>
                    <div className='main_text_content'>
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
                </section>
            </div>
        </div>
    )
};

export default References;