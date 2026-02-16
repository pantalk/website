import { Toaster } from 'react-hot-toast'

export default function Notifications() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        // default configuration

        duration: 3000,

        style: {
          backgroundColor: 'hsl(210 20% 7%)',
          color: 'white',
          fontSize: '0.8rem',
          padding: '5px 8px 5px 8px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '0.5rem',
        },

        // type configuration

        loading: {
          style: {
            borderColor: 'white',
          },
        },

        success: {
          style: {
            borderColor: 'hsl(174 72% 50%)',
          },
        },

        error: {
          style: {
            borderColor: '#B91C1C',
          },
        },
      }}
    />
  )
}
