import { addIntroduction, skills } from "../Source/introduction.jsx"


export function Introduction () {

    return (
        <div className="introduction-container">
            <div className="introduction-topic">
                <h1> ✨About Me✨</h1>
            </div>
            <div className="introduction-content">
                <div className="introduction-left">
                    {
                        addIntroduction.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1>🎃 {item.topic} :</h1>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="introduction-right">
                    {
                        skills.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1>🎃 {item.skill} :</h1>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}