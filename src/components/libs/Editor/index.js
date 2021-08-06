/* eslint-disable */

import { Component, ReactPropTypes } from 'react';
import {HighlightOutlined, FontSizeOutlined, UnderlineOutlined, ItalicOutlined, BoldOutlined, UnorderedListOutlined, OrderedListOutlined } from '@ant-design/icons';
import "./styles.scss"
import * as styles from "./styled";

import {
  Editor,
  RichUtils,
  getDefaultKeyBinding,
} from 'draft-js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.focus = () => this.refs.editor.focus();
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.props.editorState,
        4 /* maxDepth */,
      );
      if (newEditorState !== this.props.editorState) {
        this.props.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.props.onChange(RichUtils.toggleBlockType(this.props.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle),
    );
  }

  render() {
    const {margin, padding, background, readOnly, placeholder, editorState, onChange, border} = this.props;
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== 'unstyled'
      ) {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <styles.Root border={border}>
        <div className="RichEditor-root" style={{ margin: margin, padding: padding, background: background }}>
          {!readOnly && (
            <styles.Toolbar>
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
            </styles.Toolbar>
          )}
          
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={onChange}
              placeholder={placeholder}
              ref="editor"
              readOnly={readOnly}
              spellCheck
            />
          </div>
        </div>
      </styles.Root>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};
function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}
class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.icon()}
      </span>
    );
  }
}
const BLOCK_TYPES = [
  { label: 'H3', style: 'header-three', icon:()=> <FontSizeOutlined />  },
  { label: 'UL', style: 'unordered-list-item', icon: ()=> <UnorderedListOutlined />  },
  { label: 'OL', style: 'ordered-list-item', icon: ()=> <OrderedListOutlined />  },
  { label: 'Blockquote', style: 'blockquote', icon: ()=> <HighlightOutlined />},
];
const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <styles.Controls>
        {BLOCK_TYPES.map(type => (
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            icon={type.icon}
          />
        ))}
    </styles.Controls>
  );
};
const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: ()=>  <BoldOutlined /> },
  { label: 'Italic', style: 'ITALIC', icon: ()=> <ItalicOutlined /> },
  { label: 'Underline', style: 'UNDERLINE', icon: () => <UnderlineOutlined /> },
];
const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <styles.Controls>
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </styles.Controls>
  );
};

export const InitialStateJSON = {
  blocks: [
    {
      key: '16d0k',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: '' }],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};