import { classNames } from 'utils'

function Card({ index }: { index: number }) {
  const bg = () => {
    switch (index) {
      case 0:
        return 'bg-purple-300'
      case 1:
        return 'bg-purple-400'
      case 2:
        return 'bg-purple-500'
      case 3:
        return 'bg-purple-600'
      case 4:
        return 'bg-purple-700'
      case 5:
        return 'bg-purple-800'
      case 6:
        return 'bg-purple-900'
      case 7:

      default:
    }
  }

  return (
    <div
      key={index}
      className={classNames('aspect-3/4 w-10 mr-2 rounded-md', bg())}
    />
  )
}

export default function CardStack() {
  return (
    <div className="flex">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
  )
}
