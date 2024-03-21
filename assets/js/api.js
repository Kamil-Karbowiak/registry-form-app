import swal from 'sweetalert2';

export const loginUser = (formData) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 204) {
                    reject('Nie udało się zalogować użytkownika.');
                } else {

                }
            }
        };
        const requestBody = JSON.stringify(formData);
        xhr.send(requestBody);
    });
};

export const getUsers = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/users', true);
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

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/users', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status !== 204) {
                    reject('Nie udało się zarejestrować użytkownika.');
                } else {
                    swal.fire({
                        title: "Rejestracja",
                        text: "Użytkownik został pomyślnie zarejestrowany",
                        icon: "success"
                    });
                }
            }
        };
        const requestBody = JSON.stringify(formData);
        xhr.send(requestBody);
    });
};

export const updateUser = (formData) => {

    const id = formData['id'];
    delete formData['id'];

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', '/api/users/' + id, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (!xhr.status === 204) {
                    reject('Nie udało się zaktualizować użytkownika.');
                } else {
                    swal.fire({
                        title: "Aktualizacja",
                        text: "Użytkownik został pomyślnie zaktualizowany",
                        icon: "success"
                    });
                }
            }
        };
        const requestBody = JSON.stringify(formData);
        xhr.send(requestBody);
    });
};

export const deleteUser = (id) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/api/users/' + id, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (!xhr.status === 204) {
                    reject('Operacja nie została zakończona pomyślnie.');
                } else {
                    swal.fire({
                        title: "Usuwanie",
                        text: "Użytkownik został usunięty z bazy",
                        icon: "success"
                    });
                }
            }
        };
        xhr.send();
    });
};