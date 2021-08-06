import React from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import Editor, { InitialStateJSON } from '@/components/libs/Editor';

type State = {
  editorState: any;
};

class Test extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        convertFromRaw(InitialStateJSON),
      ),
    };
  }

  onchange = e => {
    this.setState({
      editorState: e,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        Hello{' '}
        <Editor
          editorState={editorState}
          onChange={this.onchange}
          placeholder="Fuck youh"
          styles={{
            margin: '10px',
            boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
          }}
        />{' '}
      </div>
    );
  }
}

export default Test;
