This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the necesary dependencies by running the command:

```bash
yarn install
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
```
**To avoid merge conflicts, be sure to stick to yarn only or npm only. We preferred to use yarn throughout.**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Backend calls are made via the actions, reducers, and axios calls. The backend is hosted on [http://localhost:8000](http://localhost:8000) by default but will be hosted on a deployed site when it is ready for release.


## Development Notes
To fetch data from the backend, use code like the following in the code for your page component:

```Javascript
  import React, { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchCourse } from '../../../actions';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);
  const currentCourse = useSelector((reduxState) => reduxState.courses.current);
```

Use ternary expressions appropriately in case the page tries to reload too quickly before the data comes from the backend. 
You may also find the following snippet helpful when changing routes:
```Javascript
  if (!currentCourse || (currentCourse.courseDept !== dept || currentCourse.courseNum !== num)) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1>Loading...</B1>
    );
  }
```

## Dependencies
* Material UI
* Tailwind CSS

## Styling
Currently, the project uses a mix of CSS modules, tailwind, and a typography library. By the end of next term, we hope to standardize styling for consistency.

## Author
* Vi N Tran
* Henry Kim
* Alex Feng
* Gyuri Hwang
* Alyssa Anderson
