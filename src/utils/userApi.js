export async function getUserInfo(mail) {
    try {
        const response = await fetch(
            `https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api/candidate/get-by-email?email=${mail}`
        );

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching user info:", err);
        return null;
    }
}
