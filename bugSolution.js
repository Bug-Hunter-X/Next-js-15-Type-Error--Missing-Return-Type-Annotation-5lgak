```javascript
// pages/index.js
import React, { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple paragraph.</p>
    </div>
  );
}
```
This version adds the `: ReactElement` annotation after the function parameters, specifying the return type.  This resolves the type error.