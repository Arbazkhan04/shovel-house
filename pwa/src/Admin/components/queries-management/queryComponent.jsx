const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Query Content</h2>
                <p>{content}</p>
                <div className="flex justify-end space-x-4 mt-4">
                    <button onClick={onClose} className="bg-zinc-900 text-white px-4 py-2 rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Modal;