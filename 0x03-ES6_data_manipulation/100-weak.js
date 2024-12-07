export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count++;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count);
}

export default queryAPI;
