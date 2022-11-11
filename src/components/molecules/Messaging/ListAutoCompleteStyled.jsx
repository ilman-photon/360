import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const InputWrapper = styled("div")(`
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
    height: 55px;
  
    &:hover {
      border-color: #40a9ff;
    }
  
    & input {
      background-color: #fff;
      color: rgba(0,0,0,.85);
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `);

const StyledTag = styled("Tag")(`
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: #40a9ff;
      background-color: #e6f7ff;
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `);

const Listbox = styled("ul")(`
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: #fff;
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: #fafafa;
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: #e6f7ff;
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
`);

export { InputWrapper, Listbox, StyledTag };
