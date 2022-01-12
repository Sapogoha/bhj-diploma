/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  if (options.method === 'GET') {
    let adr = `${options.url}?`;
    for (const item in options.data) {
      adr += `${item}=${options.data[item]}&`;
    }
    const url = adr.slice(0, -1);
    try {
      xhr.open('GET', url);
      xhr.send();
    } catch (err) {
      alert(err);
    }
  } else {
    const formData = new FormData();
    for (const item in options.data) {
      formData.append(`${item}`, `${options.data[item]}`);
    }
    try {
      xhr.open(`${options.method}`, `${options.url}`);
      xhr.send(formData);
    } catch (err) {
      alert(err);
    }
  }
  xhr.onload = () => {
    console.log(xhr.response);
    options.callback(null, xhr.response);
  };
  xhr.onerror = () => {
    options.callback(xhr.response.error, xhr.response);
  };
};
