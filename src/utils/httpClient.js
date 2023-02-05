export function get(path) {
  return fetch(process.env.REACT_APP_API + path, {
    headers: {
      Authorization:
        "Bearer " + process.env.REACT_APP_API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
