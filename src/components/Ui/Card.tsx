type Card = {
  imageLink: string
  imageSource: string
  imageAlt: string
}
export default function Card(prop: Card) {
  return (
    <a href={prop.imageLink}>
      <img src={prop.imageSource} alt={prop.imageAlt} />
    </a>
  )
}
