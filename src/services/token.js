export function addToken(options) {
  return Object.assign({}, options, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`
    }
  });
}
