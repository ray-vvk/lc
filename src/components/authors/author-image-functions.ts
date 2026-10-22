import haifeng from "../../images/authors/haifeng.jpg"
import ray from "../../images/authors/ray.jpg"
import unknown from "../../images/authors/unknown.jpg"

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