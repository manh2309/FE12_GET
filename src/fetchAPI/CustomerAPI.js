export default function callApi() {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:8080/customer/get";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
} 