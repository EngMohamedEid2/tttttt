export const HandleRequest = (
  url,
  { method = "get", key, cache = false, ...options }
) => {
  return useFetch(url, {
    baseURL: BaseUrl,
    headers: GetHeaders(),
    ...options,
    method,
    key,
    onResponse(context) {
      options.onResponse && options.onResponse(context);
    },
  });
};
