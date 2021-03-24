import React from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
function App() {
  const str = `# A Markdown Header

## A Markdown Sub Header

A Markdown [link](https://www.freecodecamp.org)

A Markdown InnerCode, \`<p>Hello World!</p>\`

\`\`\`
// A Markdown block code:

console.log('Hello World')

\`\`\`

- A Markdown List-Item

> A Markdown blokquote

A Markdown Image: ![image](https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-j-u-n-e-1767434.jpg&fm=jpg)

A Markdown **bold text**

Thats all!

Thanks for watching :-)

`
  const [markdown, setMarkdown] = useState(str)
  return (
    <section className='section-center'>
      <textarea
        id='editor'
        className='markdown-editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article id='preview'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
  )
}

export default App
