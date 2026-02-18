export async function postApplicationData(formData) {
    const body = JSON.stringify(formData);
    console.log("Submitting data to API:", formData);
    try {
        const response = await fetch(
            "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/candidate/apply-to-job-prueba",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: body
            }
        );
        console.log("API response:", response);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error Submitting Data:", err);
        return null;
    }
}