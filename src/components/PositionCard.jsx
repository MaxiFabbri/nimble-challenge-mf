import { useState } from "react";

const PositionCard = ({ position, user }) => {
    const [repoUrl, setRepoUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            uuid: user.uuid,
            jobId: position.id,
            candidateId: user.candidateId,
            repoUrl: repoUrl
        }
        console.log("Form submitted for position:", formData);

        const jsonData = JSON.stringify(formData);

        console.log("JSON data:", jsonData);



        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
    };

    const handleInputChange = (e) => {
        setRepoUrl(e.target.value);
    }

    return (
        <div className="position-card">
            <h3>{position.title}</h3>
            <input
                type="text"
                name="repoUrl"
                placeholder="Repository URL"
                onClick={(e) => e.target.select()}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default PositionCard;