import { Link, useNavigate } from 'react-router-dom'

function LinkButton({ children, to }) {
  const navigate = useNavigate()
  const style = 'text-blue-500 hover:text-blue-600 hover:underline'

  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={style}>
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  )
}

export default LinkButton