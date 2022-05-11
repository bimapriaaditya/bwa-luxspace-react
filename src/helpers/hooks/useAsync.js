import React, { useCallback, useReducer, useRef, useState } from 'react'

import useSafeDispatch from './useSafeDispatch'

const defaultState = {
  data: null,
  status: 'idle',
  error: null,
}

export default function useAsync(initialState) {

  // const [{data, status, error}, setState] = useState({ ...defaultState, ...initialState })

  const initialStateRef = useRef({
    ...defaultState,
    ...initialState
  })

  const [{data, status, error}, setState] = useReducer( (state, action) => {
    return {...state, ...action}
  }, initialStateRef.current )

  const safeSetState = useSafeDispatch(setState)

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) 
      throw new Error("useAsync().run argument must be a promise")
      safeSetState({status: 'pending'})
      return promise.then(
        (data) => {
          safeSetState({data, status: 'resolved'})
        return data
      }, (error) => {
        safeSetState({ status: 'rejected', error: JSON.parse(error.message) })
      })
    },[safeSetState]
  )

  const useData = useCallback(
    (data) => {
      safeSetState({data});
    },
    [safeSetState],
  )

  const useError = useCallback(
    (error) => {
      safeSetState({error});
    },
    [safeSetState],
  )

  const reset = useCallback(
    () => {
      safeSetState(initialStateRef.current);
    },
    [safeSetState],
  )
  

  return {
    data, 
    status, 
    error, 
    run,
    useData,
    useError,
    reset,
    isIdle: status === 'idle',
    isLoading: status === 'idle' || status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
  };
}
