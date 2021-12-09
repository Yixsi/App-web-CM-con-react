import AuthProvider from 'auth/AuthProvider'
import AppRouter from 'routes/AppRouter'

import "style/styles.css"

function App() {

    return (
      <AuthProvider>
        <AppRouter />
    </AuthProvider>
  );
}

export default App;
