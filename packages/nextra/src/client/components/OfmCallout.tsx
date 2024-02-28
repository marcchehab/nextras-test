import { useState } from 'react'
import type { DetailedHTMLProps, BlockquoteHTMLAttributes, FC,ReactElement } from 'react'

interface CalloutProps extends DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> {
  className?: string;
  children?: ReactElement | ReactElement[];
}

const OfmCallout: FC<CalloutProps> = ({ className, children }) => {
  // If it's not a foldable callout, just render it as a blockquote

  const [isFolded, setIsFolded] = useState(className?.includes('callout-folded') || false);

  const handleClick = () => {
    setIsFolded(!isFolded);
  }

  return (<blockquote className={`${className} ${isFolded ? 'callout-folded' : ''}`} onClick={handleClick}>
        {children}
      </blockquote>)
}

export { OfmCallout }
