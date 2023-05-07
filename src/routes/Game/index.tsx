import { HandOfCards, Spinner } from 'components'
import { PageWrapper } from 'layouts'
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
    <PageWrapper>
      <div>
        <p className="col-span-3 w-full">
          Hey there, <strong>{data.user.name}</strong>
        </p>
      </div>
      <HandOfCards cards={cards} />
      <div>
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
    </PageWrapper>
  )
}

export default Game
