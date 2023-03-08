import { personality } from "../Source/personality"

export function Personality () {
    return (
        <div className="personality-container">
            <div className="personality-topic">
                <h1>🦋 My Personalities 🦋</h1>
            </div>
            <div className="personality-content">
                <div className="personality-job">
                    {
                        personality.map((item, index) => {
                            return (
                            <div key={index} className="personality">
                                <img src={item.image} />
                                <div className="personality-content">
                                    <h3>{item.name}</h3>
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