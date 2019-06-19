import React from "react";
import { Segment, Header } from "semantic-ui-react";


const NavHeader = props => (
	<div>
		<Header as="h2" attached="top" block textAlign="center">
			Witter
		</Header>
        <Segment attached>
            {props.children}
        </Segment>
	</div>
);

export default NavHeader;
