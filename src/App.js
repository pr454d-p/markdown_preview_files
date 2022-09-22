import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import './style.css'
function App() {
  const [text,setText] = useState(`
  # H1
  ## H2
  **bold text**
  > blockquote
  1. First item
  2. Second item
  3. Third item
  \`code\`
  [title](https://www.example.com)
  ![alt text](image.jpg)
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\` 
  `);

  const markdown = text;
  console.log(text)
  const trsformed = <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm,remarkBreaks]} />
  console.log(trsformed);
  return (
    <div className='container'>
      <div className='editor-left' > 
        <textarea id="editor" value={text} onChange={(words)=>setText(words.target.value)} > </textarea>        
      </div>
      <div className='preview-right' id="preview"> 
      {trsformed}
      </div>
    </div>
  );
}

export default App;
