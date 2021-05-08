interface makeWrapperProps {
  props: any
  ReactChild: JSX.Element[] | JSX.Element
  withRouter
}

interface ReducerAction {
  type?: STATE_ACTIONS
  payload?: {
    url?: string
    entity?: any
    initialState?: any
    onSuccess?: (result: any) => any
    onError?: (error: Error) => any
    method?: 'head' | 'GET' | 'get' | 'delete' | 'DELETE' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | undefined
  }
  entityName?: keyof GlobalState
}


// * business logic

interface GlobalState {
  products?: {
    entities?: Product[],
    requestStatus?: REQUEST_STATUSES
    error?: Error
  }
}

interface Product {
  id: string
  name: string
  description: string
  price: number
  brand: string
  stock: number,
  photo: string
  categories: string[]
}
