import { experiences  } from "../Source/experience"


export function Experience () {
    return (
        <div className="experience-container">
            <div className="experience-topic">
                <h1>🪖 My Experiences 🪖</h1>
            </div>
            <div className="experience-content">
                <div className="experience-job">
                    {
                        experiences.map((item, index) => {
                            return (
                            <div key={index} className="job-info">
                                <img src={item.image} />
                                <div className="job-content">
                                    <h3>{item.company}</h3>
                                    <h4>{item.position}</h4>
                                    <p>{item.year}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}