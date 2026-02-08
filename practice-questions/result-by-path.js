function getResultByPath(path, obj) {
  const normalisedPath = path.replace(/\[(\d+)\]/g, '.$1');
  const keys = normalisedPath.split('.');
  let value = obj;
  for (let key of keys) {
    if (value == undefined || value == null) break;
    value = value[key];
  }

  return value;
}
const path = 'data.results.status';
const obj = {
  data: {
    results: {
      status: 'completed',
      error: '',
    },
  },
};
getResultByPath(path, obj);
