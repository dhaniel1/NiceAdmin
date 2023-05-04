import React from 'react'
import {Dropdown as RBDropdown, DropdownProps} from 'react-bootstrap';


interface IProps extends DropdownProps {
  toggleText: string;
  dropdownList: DropdownList[];
}

const Dropdown = ({toggleText, dropdownList=[]}: IProps) => {
  return (
    <RBDropdown>
    <RBDropdown.Toggle variant="success" id="dropdown-basic">
     {toggleText}
    </RBDropdown.Toggle>

    <RBDropdown.Menu>
      {dropdownList.map((item: DropdownList, idx: Number) => (
        <RBDropdown.Item href={item.href}>{item.value}</RBDropdown.Item>
      )
      )}
    </RBDropdown.Menu>
  </RBDropdown>
  )
}

export default Dropdown