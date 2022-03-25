import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Card = ({ project }) => {

    return (
        <div className="card">
            <img className="card-img" src={project.imagen} alt="" />
            <div className='card-separator'></div>
            <div className="card-description">
                <div className='card-header'>
                    <h4>{project.title}</h4>
                    <div>
                        <a href={project.giturl} target="_blank" rel="noreferrer"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                        <a href={project.url} target="_blank" rel="noreferrer"><FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} /></a>
                    </div>
                </div>
                <p className="card-text">{project.description}</p>
                <div className='card-technologies'>
                    {project.technologies.map((item) => {
                        return (
                            <span>{item}</span>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;