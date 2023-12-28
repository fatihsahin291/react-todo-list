import "./styles/AppLayout.css";

function AppLayout({ children }) {
	return (
		<div className="app-layout">
			<div>{children}</div>
		</div>
	);
}

export default AppLayout;
