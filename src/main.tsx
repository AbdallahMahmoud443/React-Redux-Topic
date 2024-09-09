
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false // send request when focus in window if true
    }
  }
})
createRoot(document.getElementById('root')!).render(

    <Provider store={store}> {/** Provider is design Pattern */}
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </Provider>
 ,
)
