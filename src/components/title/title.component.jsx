import './title.styles.css'
import hat from '../../assets/Images/magician-hat.png'

function Title() {
    
    return (
        <div className='title-container'>
            <h1 className='title-anabel'>anabel</h1>
            <img className='magician-hat' alt='magician-hat' src={hat}/>
        </div>
    );
};

export default Title;