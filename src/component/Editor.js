import {React, useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';


const Editor = () => {
  useEffect(() => {
    async function intit() {
      CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
        mode: {name: 'javascript', json: true },
        theme: 'dracula',
        autoCloseTags: true,
        autocloseBrackets: true,
        lineNumbers: true,
      });
    }
    intit();
  }, []);
    return <textarea id="realtimeEditor"></textarea>;
  
}

export default Editor