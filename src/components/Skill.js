import TheCard from './subComponents/TheCard';
import image1 from './img/css.png'
import image2 from './img/html.jpg'
import image3 from './img/javascript.jpg'
import '../App.css'

function Skill() {
    return(
        <div>
            <div className='text-skill'>
                    <p>MY SKILL:</p>
                </div>
            <div className='sub-skill'>
                <TheCard text='CSS' image={image1}/>
                <TheCard text='HTML' image={image2}/>
                <TheCard text='Javascript' image={image3}/>
            </div>
        </div>
    )
}

export default Skill