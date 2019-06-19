import React from "react";
import { Card, Icon, Grid, Image, Segment, Header } from "semantic-ui-react";

const Person = props => {
	const extra = (
		<a href="www.google.com">
			<Icon name="weight" />
			{props.mass} Killograms
		</a>
	);
	let meta = `Movies acted: ${props.movieCount}`;

	return (
		<Grid>
			<Grid.Column width={4}>
				<Card
					image="https://images.pexels.com/photos/1029783/pexels-photo-1029783.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					header={props.name}
					meta={meta}
					description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat. he is scared of small insects like roaches"
					extra={extra}
				/>
			</Grid.Column>
			<Grid.Column width={8}>
				<Segment color="orange">Gender: {props.gender}</Segment>
				<Segment color="olive">Height: {props.height}</Segment>
				<Segment color="green">Hair Color: {props.hairColor}</Segment>
				<Segment color="purple">
					Bio: 1914 translation by H. Rackham "On the other hand, we denounce
					with righteous indignation and dislike men who are so beguiled and
					demoralized by the charms of pleasure of the moment, so blinded by
					desire, that they cannot foresee the pain and trouble that are bound
					to ensue; and equal blame belongs to those who fail in their duty
					through weakness of will, which is the same as saying through
					shrinking from toil and pain. These cases are perfectly simple and
					easy to distinguish. In a free hour, when our power of choice is
					untrammelled and when nothing prevents our being able to do what we
					like best, every pleasure is to be welcomed and every pain avoided.
					when our power of choice is untrammelled and when nothing prevents our
					being able to do what we like best, every pleasure is to be welcomed
					and every pain avoided. when our power of choice is untrammelled and
					when nothing prevents our being able to do what we like best, every
					pleasure is to be welcomed and every pain avoided.
				</Segment>
			</Grid.Column>
			<Grid.Column width={4}>
				<Image src="https://images.pexels.com/photos/2404055/pexels-photo-2404055.jpeg?auto=compress&cs=tinysrgb&dpr=3&w=600" />
			</Grid.Column>
		</Grid>
	);
};

export default Person;
