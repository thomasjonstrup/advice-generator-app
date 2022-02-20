import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Quote from "./components/Quote";

// Creat a client
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Quote />
		</QueryClientProvider>
	);
}

export default App;
