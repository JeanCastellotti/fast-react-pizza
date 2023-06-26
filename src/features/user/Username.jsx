import { useSelector } from 'react-redux'

function Username() {
  const { username } = useSelector((store) => store.user)

  if (!username) return

  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  )
}

export default Username
