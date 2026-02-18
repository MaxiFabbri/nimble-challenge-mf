import { useState } from "react";
import { postApplicationData } from "../utils/applicationApi.js";

const PositionCard = ({ position, user }) => {
    const [repoUrl, setRepoUrl] = useState("");
    const [isUrlValid, setIsUrlValid] = useState(true);

    const validateInput = () => {
        if (!repoUrl) {
            setIsUrlValid(false);
            alert("Debe Ingresar un URL.");
            return false;
        }
        setIsUrlValid(true);
        return true;
    }

    const submitData = async (formData) => {
        const response = await postApplicationData(formData);
        console.log("Response from API:", response);
        if (response === null) {
            console.log("Failed to send application...");
            alert("Error al enviar la aplicación. Por favor, inténtalo de nuevo.");
            return null;
        }
    };

    const handleSubmit = (e) => {
        if (!validateInput()) return
        
        e.preventDefault();
        const formData = {
            uuid: user.uuid,
            jobId: position.id,
            candidateId: user.candidateId,
            repoUrl: repoUrl
        }

        submitData(formData);
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
                className={isUrlValid ? "input" : "input error"}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default PositionCard;