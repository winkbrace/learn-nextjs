import {useState} from 'react';

function Header({ title }) {
    return <h1>{ title ? title : "Default title" }</h1>;
}

export default function HomePage() {
    // always this structure: [variable, function to update variable] = React.useState(initial value)
    const [likes, setLikes] = useState(0);
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleClick() {
        setLikes(likes + 2);
    }

    return (
        <div>
            <Header title="React 💙" />
            <Header title="Develop. Preview. Ship. 🚀" />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
