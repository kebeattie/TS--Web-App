//API call to fetch fact data

export const getData = async () => {
    try {
        const response = await fetch(`http://localhost:4000`);
        const data = await response.json();
        
        return data;
    } catch(error) {

        return error;
    }
}