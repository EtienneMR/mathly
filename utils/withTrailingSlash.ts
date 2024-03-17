export default function (path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}
