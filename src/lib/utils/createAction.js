export default function createActions(type) {
  return payload => ({ type, payload });
}
