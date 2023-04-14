import { Spinner } from 'components'
import HandOfCards from 'components/HandOfCards'
import { useState } from 'react'
import { useUserStore } from 'state'
import { generateRandomCards } from 'utils'

const players = [
  { key: 'Gwen Scott' },
  { key: 'Karen Dunn' },
  { key: 'Dana Harmon' },
  { key: 'Paula Kelley' },
]

const roundResults = [
  {
    key: 'Popular vote',
    points: 13,
  },
  {
    key: 'Outliers',
    points: 13,
  },
]

const StatisticGroup = ({
  loading,
  title,
  statistics,
}: {
  loading: boolean
  title: string
  statistics: Record<string, string | number>[]
}) => {
  return (
    <div className="border rounded-md px-2 py-1 w-fit">
      <h3>{title}</h3>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="list-disc list-inside">
          {statistics.map((item) => (
            <li key={item.key}>{item.key}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Game = () => {
  const cards = generateRandomCards(6)

  const data = useUserStore()

  const [loading, setIsLoading] = useState(false)

  return (
    <div className="h-[90vh] p-10">
      <div className="max-w-5xl mx-auto @container">
        <div className="space-y-2 @4xl:space-y-0 @4xl:grid @4xl:grid-cols-[3fr_1fr] @4xl:space-x-2 ">
          <main className="flex flex-col p-4 space-y-5">
            <p>Hey there, {data.user.name}</p>
            <div className="@xl:grow">
              <HandOfCards cards={cards} />
            </div>
          </main>
          <article className="p-4 space-y-2">
            <StatisticGroup
              loading={loading}
              statistics={players}
              title="Players"
            />
            <StatisticGroup
              loading={loading}
              statistics={roundResults}
              title="Round Results"
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Game
