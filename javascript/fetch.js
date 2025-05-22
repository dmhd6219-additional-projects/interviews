/*
 * Необходимо написать функцию, которая на вход принимает url,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получения данных использовать fetch.
 * Можно использовать только Promise API
 * Если во время запроса произошла ошибка, то попробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */

function get(url, tries=0) {
    return fetch(url)
        .then(res => Promise.resolve(res.json()), () => {
            tries++;
            console.log(tries);
            if (tries === 5){
                return Promise.reject('Заданный URL недоступен')
            }
            return get(url, tries);
        })
}

get('https://rickandmortyapi.com/api/character/253')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));