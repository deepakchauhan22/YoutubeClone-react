

import React from 'react';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'


class footer extends React.Component{

   
    render(){
        return(
            <div className='ui footer'>
              

<Segment inverted vertical >
      <Container textAlign='center'>
       <p>A Project by<span> Deepak Chauhan</span></p>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
          <i class="facebook f icon"></i>
          </List.Item>
          <List.Item as='a' href='#'>
          <i class="medium m icon"></i>
          </List.Item>
          <List.Item as='a' href='#'>
          <i class="linkedin icon"></i>
          </List.Item>
          <List.Item as='a' href='#'>
          <i class="github icon"></i>
          </List.Item>
          <List.Item as='a' href='#'>
          <i class="instagram icon"></i>
          </List.Item>
        </List>
      </Container>
    </Segment>
            </div>
        )
    }
}


export default footer;
