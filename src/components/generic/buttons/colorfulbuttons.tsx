interface ColorfulButtonProps {
    title: string;
    color: string;
    onClick: () => void;
}

export function ColorfulButton({ title, color, onClick }: ColorfulButtonProps  ) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 bg-opacity-5 rounded-lg hover:bg-opacity-100 hover:shadow-lg transition duration-200 ease-in-out
        ${color === 'blue' ? 'bg-blue-500 text-white' : ''}  ${color === 'green' ? 'bg-green-500 text-white' : ''} ${color === 'red' ? 'bg-red-500 text-white' : ''} ${color === 'blue-500' ? 'bg-blue-500 text-white' : ''}
        `}>
            {title}
        </button>
    );
}
