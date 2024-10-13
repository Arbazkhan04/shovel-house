import { useState } from 'react';

const ReplyModal = ({ isOpen, onClose, onSubmitReply }) => {
    const [replyText, setReplyText] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Reply to Query</h2>
                <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full h-24 p-2 border rounded"
                    placeholder="Write your reply..."
                />
                <div className="flex justify-end space-x-4 mt-4">
                    <button onClick={onClose} className="bg-zinc-900 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button
                        onClick={() => onSubmitReply(replyText)}
                        className="bg-zinc-900 text-white px-4 py-2 rounded"
                    >
                        Submit Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReplyModal;