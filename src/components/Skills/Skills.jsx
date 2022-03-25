import './skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div id="skills" className='section skills'>
            <h2>Tecnologías</h2>
            <div className='skills-text'>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> HTLM / CSS</span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> JavaScript </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> React </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Sass </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> SQL / PLSQL </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> NPM </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> GIT </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Vue </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Firebase </span>
            </div>
            <h2>Herramientas</h2>
            <div className='skills-text'>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Figma </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Atomic Design </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> Trello </span>
                <span><FontAwesomeIcon className='icon' icon={faCaretRight} /> VSC </span>
            </div>
        </div>
    )
}

export default Skills;