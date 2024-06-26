export default function InPageNav({ items }: any) {
  return (
    <nav>
      <ul className="flex w-8/12 items-center justify-between border-b-2 border-black m-auto ">
        {items.map((item: string) => (
          <li className="font-extralight text-2xl text-gray-400">
            <a href={`/about-us/${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
