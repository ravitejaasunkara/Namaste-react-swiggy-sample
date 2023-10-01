import React from 'react'
import { useRouteError } from 'react-router-dom';
export default function Error() {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops, the page you are looking for is  not found.</h1>
        <h1>{err.status + ": "+ err.statusText}</h1>
    </div>
  )
}
