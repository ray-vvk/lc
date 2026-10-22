import haifeng from "./images/haifeng.jpg"
import ray from "./images/ray.jpg"
import unknown from "./images/unknown.jpg"

export const determineImgSrc = (authorName: string) => {
  switch (authorName) {
    case "haifeng chen":
      return haifeng;
    case "ray":
      return ray;
    default:
      return unknown;
  }
}