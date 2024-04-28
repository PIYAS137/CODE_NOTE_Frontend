import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const NewNote = () => {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [course, setCourse] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, code, course);

        // Reset the title and code fields
        setTitle('');
        setCode('');
        setCourse('')

        // Hide the modal
        const modal = document.getElementById('my_modal_2');
        modal.close();
    }

    return (
        <div className='sticky top-16 flex justify-end bg-red-300 z-50'>
            <button className="btn bg-blue-500 hover:bg-blue-400 text-white border-none absolute top-4 right-4" onClick={() => document.getElementById('my_modal_2').showModal()}>
                <div className="flex flex-col items-center gap-1">
                    <FaTimes className="rotate-45" />
                    <small className="text-xs uppercase cursor-pointer">n e w</small>
                </div>
            </button>
            <dialog id="my_modal_2" className="modal">
                <form onSubmit={handleSubmit} className="modal-box xl:min-w-[1000px] dark:bg-gray-800">
                    <h3 className="font-bold text-lg text-center dark:text-white">Create New Note</h3>
                    <input value={course} onChange={(e) => setCourse(e.target.value)} type="text" className=' input dark:text-white dark:bg-gray-900 border-gray-200 w-full mt-4' placeholder='Enter Course Name' />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className=' input dark:text-white dark:bg-gray-900 border-gray-200 w-full mt-2' placeholder='Enter a headline' />
                    <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={10} className="textarea dark:text-white dark:bg-gray-900 border-gray-200 w-full mt-2" placeholder="Enter CODE"></textarea>
                    <button type="submit" className='btn btn-primary w-full uppercase'>submit</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default NewNote;
