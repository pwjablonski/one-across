export default function makeShareUrl(id) {
  const uri = document.createElement("a");
  uri.href = `/${id}`;
  return uri.href;
}
