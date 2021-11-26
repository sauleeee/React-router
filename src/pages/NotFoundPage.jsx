import { Link } from 'react-router-dom'

const NotfoundPage = () => {
    return (
        <div>
            This page doesn't exist. Go <Link to="/">home</Link>
        </div>
    )
}
export {NotfoundPage};