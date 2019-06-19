export async function formatUserMessageStart(response) {
  const data = await response.data.map(x => ({
    ...x,
    show: false,
  }));
  response.data = data;
  return response;
}

export async function flipMessageDisplay(data, paramObject) {
  const result = await data.map(
    x =>
      x.uuid === paramObject.uuid
        ? { ...x, show: !x.show }
        : { ...x, show: x.show },
  );
  return result;
}
