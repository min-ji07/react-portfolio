import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
// react-query (실시간 데이터 가져올 때 유용함)
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient() 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react-query
  <QueryClientProvider client={queryClient}>
    {/* store(react-redux) */}
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
    // {/* <React.StrictMode> */}
    // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
