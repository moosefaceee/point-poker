import { CardProps, CardRank, CardSuit } from 'components/HandOfCards'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

const suits: CardSuit[] = ['♠', '♥', '♦', '♣']

const ranks: CardRank[] = ['A', '2', '3', '5', '8', '13']

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

export function generateRandomCards(numCards: number): CardProps[] {
  if (numCards > ranks.length) {
    throw new Error("Can't generate more unique cards than available ranks")
  }

  const selectedRanks: CardRank[] = ranks.slice(0, numCards)

  for (let i = numCards; i < ranks.length; i++) {
    const j = getRandomInt(i + 1)

    if (j < numCards) {
      selectedRanks[j] = ranks[i]
    }
  }

  const cards: CardProps[] = selectedRanks.map((rank) => ({
    suit: suits[getRandomInt(suits.length)],
    rank,
  }))

  return cards
}
