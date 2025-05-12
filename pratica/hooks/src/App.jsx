import './App.css'

import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseReducer from './components/UseReducer'
import UseContext from './components/UseContext'
import ThemeContextProvider from './components/theme-context'
import UseMemo from './components/UseMemo'
import UseCallBack from './components/UseCallBack'

function App() {
  return (
    <ThemeContextProvider>
      <UseState />

      <UseEffect />

      <UseRef />

      <UseReducer />

      <UseContext />

      {/* <UseMemo /> */}

      <UseCallBack />

      {/* UseLayoutEffect */}
    </ThemeContextProvider>
  )
}

export default App
