import { PropsWithChildren } from 'react'

type FullBleedProps = React.HTMLAttributes<HTMLDivElement>

/**
 * This Wrapper exists many reasons outlined by Josh Comeau in this article
 * https://www.joshwcomeau.com/css/full-bleed/
 *
 * In short, it allows a fullscreen width when using `isFullBleed = true`,
 * if this prop is false (it's default), the screen will be contained to
 * a smaller size for easy readability and usability.
 *
 * The human eye gets tired with lines of text or web apps that are too wide.
 * Same as our linting is limited to a certain line length.
 */
export default function FullBleed({
  children,
}: PropsWithChildren<FullBleedProps>) {
  return (
    <div className="w-full grid grid-cols-custom col-span-3">{children}</div>
  )
}
