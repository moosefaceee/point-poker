import { Avatar } from 'components'
import { Link } from 'react-router-dom'
import { useUserStore } from 'state'
import { Player } from 'types'
import { classNames } from 'utils'

const players: Player[] = [
  { id: '1', name: 'Gwen Scott' },
  { id: '2', name: 'Karen Dunn' },
  { id: '3', name: 'Dana Harmon' },
  { id: '4', name: 'Paula Kelley' },
]

const Game = () => {
  const userStore = useUserStore()

  return (
    <div className="flex min-h-full h-[65vh] items-center justify-center p-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center items-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-purple-600">
            Welcome to the Table,
          </h2>
          <div className="flex flex-row items-center justify-center mb-12 mt-6">
            <Avatar />
            <p className="ml-4 text-4xl font-bold text-gray-900">
              {userStore.user.name || 'Sir Meow'}
            </p>
          </div>
          <p className="mb-6 text-md font-bold text-gray-900">
            Other players ready:
          </p>
          {players?.length ? (
            <ul className="flex flex-col w-auto items-center">
              {players.map((player, i) => (
                <li
                  key={player.id}
                  className={classNames(
                    'flex flex-row items-center w-fit',
                    i < players.length - 1 ? 'mb-3' : '',
                  )}
                >
                  <Avatar size="small" />
                  <Link className="ml-2" to={`players/${player.id}`}>
                    {player.name ? <>{player.name}</> : <i>No Name</i>}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No players</i>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Game
