import React, { ReactNode } from 'react'

export type CardSuit = '♠' | '♥' | '♦' | '♣'

export type CardRank = 'A' | '2' | '3' | '5' | '8' | '13'

export interface CardProps {
  suit: CardSuit
  rank: CardRank
}

type CardWrapProps = {
  children: ReactNode
  rank: CardRank
}

const CardWrap = ({ children, rank }: CardWrapProps) => {
  return (
    <div className="w-20 h-32 bg-white border-2 border-black rounded-lg shadow-lg flex items-center justify-center relative">
      <div className="absolute top-2 left-2">{rank}</div>
      <div className="absolute bottom-2 right-2">{rank}</div>
      {children}
    </div>
  )
}

const Card: React.FC<CardProps> = ({ suit, rank }) => {
  const key = rank + suit

  const props = { key, rank }

  if (suit === '♠' || suit === '♦') {
    return (
      <CardWrap {...props}>
        <div className="text-3xl text-red-600">{suit}</div>
      </CardWrap>
    )
  }

  return (
    <CardWrap {...props}>
      <div className="text-3xl">{suit}</div>
    </CardWrap>
  )
}

interface HandOfCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardProps[]
}

const HandOfCards = ({ cards, ...props }: HandOfCardsProps) => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-green-200 w-full"
      {...props}
    >
      <div>
        {cards.map((card, index) => {
          const zIndex = `z-${index}`

          return (
            <div className={'inline-flex' + ` ${zIndex}`}>
              <Card suit={card.suit} rank={card.rank} key={index} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HandOfCards
