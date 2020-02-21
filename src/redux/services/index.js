export function GetDataFromServer(apiPath, reqMethod, formBody){
    let myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json')

    if (!reqMethod && reqMethod !== "POST") {
        return fetch(apiPath, { method: 'GET', headers: myheaders })

    } else {
        if (formBody) {
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: myheaders
            }
            return fetch(apiPath, fetchData);
        }
    }
}