import ellipse1 from '../../assets/abstracts/Ellipse 1.png'
import ellipse2 from '../../assets/abstracts/Ellipse 2.png'
import anabel from '../../assets/Images/ai-anabel.png'

import './ai-anabel.styles.css'

function AiAnabel() {

    return (
        <div class="parent">
            <img className='anabel' alt='anabel' src={anabel} />
            <img className='ellipse1' alt='ellipse1' src={ellipse1} />
            <img className='ellipse2' alt='ellipse2' src={ellipse2} />
        </div>
    );
};

export default AiAnabel;