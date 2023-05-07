import { Spinner } from 'components'
import HandOfCards from 'components/HandOfCards'
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
    <>
      <PageWrapper>
        {/* <article className="p-4 space-y-2">
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
      </article> */}
        {/* <FullBleed className=''>Full Bleed</FullBleed> */}
        {/* <div className="bg-green-500 text-white p-4 col-span-1">Full bleed</div>
        <div className="bg-purple-500 text-white p-4 col-span-1">
          Full bleed
        </div>
        <div className="bg-orange-500 text-white p-4 col-span-1">
          Full bleed
        </div> */}
        {/* <p className="col-span-3 w-full">Hey there, {data.user.name}</p> */}
        <div></div>
        <HandOfCards cards={cards} />
        <div></div>
      </PageWrapper>
    </>
  )
}

export default Game
