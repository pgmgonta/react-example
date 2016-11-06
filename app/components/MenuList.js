import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class MenuList extends React.Component {

  constructor() {
    super();
    this.setState({open: false});
  }

  handleNestedListToggle(item){
    this.setState({
      open: item.state.open,
    });
  }

  render() {
    return (
      <List>
        <Subheader>Menu</Subheader>
        <ListItem primaryText="Sample Menu"/>
        <ListItem
          primaryText="Nested Menu"
          initiallyOpen={false} 
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem
              key={1}
              primaryText="Sample Menu in Menu"
            />
          ]}
        />
      </List>
    )
  }
}

export default MenuList

