import AppLayout from './components/AppLayout'
import LoginSignup from './authentication/LoginSignup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import TeachersMain from './components/TeachersMain'
import StudentsMain from './components/StudentsMain'
import MessagesMain from './components/MessagesMain'
import Messages from './Messages/Messages'
import Bookings from './components/Bookings'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to={'teachers'} />} />
            {/* <Route path="/upload" element={<Upload />} /> */}
            <Route path="/teachers" element={<TeachersMain />} />
            <Route path="/students" element={<StudentsMain />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/messages" element={<MessagesMain />} />
            <Route path="/messages/:id" element={<Messages />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#fff',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  )
}
