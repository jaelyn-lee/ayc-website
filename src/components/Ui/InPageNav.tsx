export default function InPageNav({ items }: any) {
  return (
    <nav>
      <ul className="flex gap-4 w-2/3 items-center justify-center border-b-4 border-black ">
        {items.map((item: string) => (
          <li className="font-semibold text-3xl">{item}</li>
        ))}
      </ul>
    </nav>
  )
}
