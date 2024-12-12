

// Function to submit the score
export const submitScore = async (accessToken:string | null, score: number, season: string) => {
    // const accessToken = useUserStore.getState().accessToken;



    const url = '/api/update-point';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
    };

    const body = JSON.stringify({
        point: score,
        season: season,
    });
    // console.log(body,accessToken)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        });

        console.log(response);
        if (response.ok) {
            const data = await response.json();
            alert('You have successfully submit your game!')
            console.log('Score submitted successfully:', data);
            return response.status;
        } else {
            console.error('Error submitting score:', response.statusText);
        }
    } catch (error) {
        console.error('Request failed', error);
    }
    return;
};
