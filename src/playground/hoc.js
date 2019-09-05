import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
	return (
		<div>
			<h1>Info</h1>
			<p>The info is: {props.info}</p>
		</div>
	);
}

//  withAdminWarning fn is a HOC
const withAdminWarning = (WrappedComponent) => {
	return (props) => { // stateless component
		return (
			<div>
			{props.isAdmin && <p>This is admin area</p>}
			<WrappedComponent {...props} />
			</div>
		)
	};
}

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="test" />, document.getElementById('app'));