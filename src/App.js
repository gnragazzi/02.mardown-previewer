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
    <main>
      <section className='section-center'>
        <h1 className='title'>markdown previewer</h1>
        <div className='markdown-container'>
          <div className='markdown-article'>
            <h2 className='markdown-subtitle'>editor</h2>
            <textarea
              id='editor'
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
          <div className='markdown-article'>
            <h2 className='markdown-subtitle'>preview</h2>
            <article id='preview'>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <p className='footer-text'>
          {new Date().getFullYear()} Markdown Previewer.<br></br> This is a
          project for
          <a href='https://www.freecodecamp.org/' target='_blank'>
            Free Code Camp
          </a>
          . Check Out this amaizing free site to learn how to code.
        </p>
      </footer>
    </main>
  )
}

export default App
