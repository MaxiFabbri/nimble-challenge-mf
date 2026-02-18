export async function postApplicationData(formData) {
    const body = JSON.stringify(formData);
    console.log("Submitting data to API:", body);
    // try {
    //     const response = await fetch(
    //         "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/candidate/apply-to-job",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: body
    //         }
    //     );
    //     console.log("API response:", response);

    //     if (!response.ok) {
    //         throw new Error(`Error HTTP: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     alert("Aplicación enviada con éxito!");
    //     return data;
    // } catch (err) {
    //     console.log("Error Submitting Data:", err);
    //     alert("Error al enviar la aplicación. Por favor, inténtalo de nuevo.");
    //     return null;
    // }
}