import data from "../../assets/scripts/projects";
import Card from "../Card/Card";

const Projects = () => {
    return (
        <div id="projects">
            <h2>Proyectos</h2>
            {data.map((item) => {
                return (
                    <Card key={item.id} project = {item} />
                )
            })
            }
        </div>
    )
}

export default Projects;