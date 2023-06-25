import { formatCurrency } from '../../utils/helpers'
import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && 'opacity-70 grayscale'}`}
      />
      <div className="grow self-center">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
