export function get(path) {
  return fetch(process.env.REACT_APP_API + path, {
    headers: {
      Authorization:
        "Bearer " + process.env.REACT_APP_API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => {
    if(!result.ok){
      return result.json().catch(() => {
        throw new Error(result.status);
      }).then(({message}) => {
        throw new Error(message || result.status);
      });
    }
    return result.json()
  });
}
