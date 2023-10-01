import React, { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
    //const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='border-2 border-red-900 p-2 m-2'>
            <p className='font-bold text-2xl'>{title}</p>
            <p>{isVisible && description}</p>
            <button
                className='underline underline-offset-1 text-blue-900 font-bold'
                onClick={() => setIsVisible(title)}
            >
                {isVisible ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default function Instamart() {
    const [visibleSection, setIsVisibleSection] = useState("");
    return (
        <div>
            <h1>Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}
                isVisible={visibleSection === ("About Instamart")}
                setIsVisible={(e) => {
                    setIsVisibleSection(e)
                    console.log(visibleSection)
                }
                }
            />
            <Section
                title={"Team Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}
                isVisible={visibleSection === "Team Instamart"}
                setIsVisible={(e) => {
                    setIsVisibleSection(e)
                    console.log(visibleSection)
                }}
            />
            <Section
                title={"Careers Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}
                isVisible={visibleSection === "Careers Instamart"}
                setIsVisible={(e) => {
                    setIsVisibleSection(e)
                    console.log(visibleSection)
                }} />
        </div>
    )
}
