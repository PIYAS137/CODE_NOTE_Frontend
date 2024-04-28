import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

const CodeViewPage = () => {
    const codeString = `#include <stdio.h>
    int main()
    {
        int myArr [] = {2,3,5,7,8,9,19};
        int target = 5;
        int left=0;
        int right=sizeof(myArr)/sizeof(myArr[0]);
        int middle;
        
        while(left<=right){
            middle = (left+right)/2;
            if(myArr[middle]==target){
                printf("Item found at index : %d\n",middle);
                return 0;
            }else if(target>myArr[middle]){
                left = middle+1;
            }else{
                right = middle-1;
            }
        }
        printf("Item not found !");
        
        return -1;
    }`;

    const [copyStatus, setCopyStatus] = useState('COPY');

    const handleCopyClick = () => {
        navigator.clipboard.writeText(codeString)
            .then(() => setCopyStatus('Copied'))
            .catch(() => setCopyStatus('Failed to copy'));
        setTimeout(() => setCopyStatus('COPY'), 1000); // Reset status after 1.5 seconds
    };

    return (
        <div className='h-screen overflow-y-scroll max-w-[80%] mx-auto p-10'>
            <div className="relative">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
                <button
                    className="absolute top-2 right-2 px-4 py-1 bg-gray-600 text-white rounded-md transition duration-300 hover:bg-gray-600"
                    onClick={handleCopyClick}
                >
                    {copyStatus}
                </button>
            </div>
        </div>
    );
};

export default CodeViewPage;
