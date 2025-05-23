/**

 Напишите функцию WorkspaceWithAutoRetry, которая будет автоматически
 перезапрашивать данные с сервера в случае ошибки до тех пор, пока
 не будет достигнуто максимальное количество попыток (аргумент count). */

var fetchWithAutoRetry = async function (fetcher, count, tries=0) {
   return fetcher()
   .then(res => res.json())
       .catch(() => {
        tries++;
        console.log(tries);
        if (tries === count){
          return "Already tried 5th times"
        }
        return fetchWithAutoRetry(fetcher, count, tries);
       });
};

var fetchWithAutoRetryAsync = async function (fetcher, count) {
    let error = undefined;
    while (count) {
        try {
         return await fetcher()
        }
        catch (err) {
            count--;
            error = err;
        }
    }

    throw error;
};

const ans = fetchWithAutoRetry(() => Promise.reject(999), 5);
ans.then(res => console.log(res));