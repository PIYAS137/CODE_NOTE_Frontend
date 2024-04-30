import {Link} from 'react-router-dom'

const OneNote = () => {



    return (

        <div className="card bg-orange-400 dark:bg-gray-800 dark:text-white">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">Algorithm Lab</h2>
                    <small className=''>12-04-2024</small>
                </div>
                <p>Code about Recursion</p>
                <div className="card-actions justify-end">
                    <Link target='_blank' to={'/:300'}>
                        <button className="btn dark:bg-warning dark:border-none">VIEW CODE</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default OneNote