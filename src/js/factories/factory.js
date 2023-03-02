export function contactFactory(object) {
  const obj = {
    name: object.name,
    email: object.email,
    message: object.message,
  };
  return obj;
}
