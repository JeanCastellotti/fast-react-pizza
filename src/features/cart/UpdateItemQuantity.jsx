import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseQuantity, getQuantity, increaseQuantity } from './cartSlice'

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch()

  const quantity = useSelector(getQuantity(pizzaId))

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  )
}

export default UpdateItemQuantity
