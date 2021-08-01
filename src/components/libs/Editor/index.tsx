import React from 'react';
import { Editor, RichUtils } from 'draft-js';
import './styles.css';
import 'draft-js/dist/Draft.css';

import {
  getBlockStyle,
  styleMap,
  BlockStyleControls,
  InlineStyleControls,
} from './functions';

type Props = {
  editorState: any;
  onChange: Function;
};

type State = {};

class RichEditor extends React.Component<Props, State> {
  onChange = editorState => {
    const { onChange } = this.props;
    onChange('editorState', editorState);
  };

  handleKeyCommand = command => {
    const { editorState } = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  onTab = e => {
    const { editorState } = this.props;
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  toggleBlockType = blockType => {
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  render() {
    const { editorState } = this.props;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    const className = 'RichEditor-editor';

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell a story..."
            spellCheck
          />
        </div>
      </div>
    );
  }
}

export default RichEditor;
