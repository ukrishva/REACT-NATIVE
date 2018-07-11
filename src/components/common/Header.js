
import React from 'react';
import { Text, View } from 'react-native';

//make a component 
const Header = (props) => {
	const { textStyle, ViewStyle } = styles;
	
	return (
		<View style={ViewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

//only root component use AppRegistry
//Header is a child component


const styles = {
	ViewStyle: {
		backgroundColor: '#F0F0F0',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		elevation: 2,
		position: 'relative'
	},

	textStyle: {
		fontSize: 20
	}
};

//Make component available to others
export { Header };
