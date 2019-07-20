import React from 'react';
import './App.scss';

const marked = require('marked');

marked.setOptions({
  breaks: true
});

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render(){
    return (
      <div className="container">
        <div className="markdown">
          <div className="markdown-header">
            <p>Markdown</p>
          </div>
          <div className="markdown-body">
            <textarea onChange={this.handleChange} id="editor" autofocus value={this.state.markdown}></textarea>
          </div>
        </div>
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

const Preview = (props) => {
  return (
    <div className="preview">
      <div className="preview-header text-center">
        <p>Preview</p>
        <div className="buttons">
          <button className="min">
            <i className="fas fa-window-minimize fa-fw"></i>
          </button>
          <button className="max">
            <i className="fas fa-window-maximize fa-fw"></i>
            {/* <i className="fas fa-compress-arrows-alt fa-fw"></i> */}
          </button>
        </div>
      </div>
      <div id="preview" className="preview-body" dangerouslySetInnerHTML={{__html: marked(props.markdown)}}> 
        
      </div>
    </div>
  );
}

export default App;
