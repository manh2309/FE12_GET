export function callApi() {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:8080/customers/get";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
export function delAPI(id) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:8080/customers/delete/${id}`;
        fetch(url, {
            method: "DELETE",
            headers:{'Content-Type':'application/json'}

        })
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
} 