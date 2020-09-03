import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {

	return (

		<Menu secondary pointing>

			<Menu.Item as={Link} to='/' style={{fontSize:'100%'}}>Contacts App</Menu.Item>
			
			<Menu.Item position='right'>
				<Button as={Link} to='/contacts/create' primary icon style={{fontSize:'70%'}}>
					<Icon name='add'></Icon>
					Create Contact
				</Button>
			</Menu.Item>
			
			<Menu.Item>
				<Button negative ui button icon style={{fontSize:'70%'}}>
					<Icon name='logout'></Icon>
					Logout
				</Button>
			</Menu.Item>
		
		</Menu>

	)

}

export default Header