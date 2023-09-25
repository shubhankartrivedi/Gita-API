'use client'

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import loader from '@monaco-editor/loader';

function JsonEditor(props) {
    
    // const darkJsonTheme = {
    //     base: 'vs-dark', // base theme for dark mode
    //     inherit: true,
    //     rules: [
    //       { token: 'string.key.json', foreground: 'FFA07A' }, // light salmon
    //       { token: 'string.value.json', foreground: '98FB98' }, // pale green
    //       { token: 'string.json', foreground: 'FFD700' }, // golden
    //       { token: 'value.number.json', foreground: '00CED1' }, // dark turquoise
    //       { token: 'delimiter.square.json', foreground: 'FFC0CB' }, // pink
    //       { token: 'delimiter.curly.json', foreground: 'FFC0CB' } // pink
    //     ],
    //     colors: {
    //       'editor.background': '#1E1E1E', // editor background color
    //       'editor.foreground': '#D4D4D4', // default font color
    //       'editor.lineHighlightBackground': '#333333', // current line number color
    //       'editor.lineNumber.foreground': '#5A5A5A', // line number color
    //       'editor.selectionBackground': '#ADD6FF', // selection color
    //       'editor.cursorColor': '#FFFFFF' // cursor color
    //     }
    //   };

      useEffect(() => {
        loader.init().then((monaco) => {
            // monaco.editor.defineTheme('darkJsonTheme', darkJsonTheme);
            const wrapper = document.getElementById('response');
            wrapper.style.height = '88vh';
            const properties = {
              value: code,
              language: 'json',
              options: editorOptions,
    
            };
            
          
            monaco.editor.create(wrapper, properties);
            if(props.theme) monaco.editor.setTheme('vs-dark');
            else monaco.editor.setTheme('vs-light');
          });
      }, [props.theme]);
    

      
    const [code, setCode] = useState(JSON.stringify(props.data, null, 4));

    useEffect(() => {
        // props.setData(code);
    }, [code]);
    const editorOptions = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
    };

    
    return (
<div className='border-l-2 border-yellow-500 dark:border-yellow-800'>
        <div id='response' className='animate-fade-in-simple'></div>
        </div>
        // <Editor
           
        //     height={'50vh'}
        //     language="json"
        //     theme="darkJsonTheme"
        //     value={code}
        //     options={editorOptions}
        //     onChange={(newValue) => setCode(newValue)}
        // />
    );
}

export default JsonEditor;