import { CardStack, Spinner } from 'components'
import { useState } from 'react'
import { Player } from 'types'

const players: Player[] = [
  { id: '1', name: 'Gwen Scott' },
  { id: '2', name: 'Karen Dunn' },
  { id: '3', name: 'Dana Harmon' },
  { id: '4', name: 'Paula Kelley' },
]

const Game = () => {
  const [loading, setIsLoading] = useState(false)

  return (
    <div className="h-[90vh] py-10">
      <div className="max-w-5xl mx-auto @container">
        <div
          className="
                @4xl:grid @4xl:grid-cols-[1fr_3fr] @4xl:space-x-2 @4xl:space-y-0 
                space-y-2
              "
        >
          <article className="border border-dashed border-amber-400 p-4 space-y-2">
            <h3>Players</h3>
            <ul className="list-disc list-inside">
              {players.map((player) => {
                return <li key={player.id}>{player.name}</li>
              })}
            </ul>
            <h3>Statistics</h3>
            <ul className="list-disc list-inside">
              <li key="rounds">Rounds:</li>
              <li key="points">Points:</li>
            </ul>
          </article>
          <main className="flex flex-row border border-dashed border-amber-400 p-4">
            <div className="@xl:grow">
              <CardStack />
            </div>
            <div className="space-y-2">
              <h3>Round Results</h3>
              {loading ? (
                <Spinner />
              ) : (
                <ul className="list-disc list-inside">
                  <li key="rounds">Rounds:</li>
                  <li key="points">Points:</li>
                </ul>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Game
