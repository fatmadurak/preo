import React from 'react'

import { ExampleComponent } from 'preo'
import { Button } from 'preo'
import 'preo/dist/index.css'

const App = () => {

  return( 
  <>
    <ExampleComponent text="Create React Library Example 😄" />
    <Button onClick={()=>alert("tıklandı.")} text="tıkla"/>
   
 </>
    ) 

}

export default App

