export const getUsers = () => {
    console.log("getUsers");
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/users', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Nie udało się pobrać danych użytkowników.');
                }
            }
        };
        xhr.send();
    });
};

export const registryUser = (formData) => {
    console.log("formData");
    console.log(formData);
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/users', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Nie udało się pobrać danych użytkowników.');
                }
            }
        };
        const requestBody = JSON.stringify(formData);
        xhr.send(requestBody);
    });
};
