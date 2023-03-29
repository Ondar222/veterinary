export default function myImageLoader({ src, width, quality }) {
  return `${src}?&q=${quality || 75}`
}