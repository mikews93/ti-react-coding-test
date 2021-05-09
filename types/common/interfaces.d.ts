interface makeWrapperProps {
  props: any
  ReactChild: JSX.Element[] | JSX.Element
  withRouter
}

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

interface payload {
  url?: string;
  entity?: any
  method?: Method
  initialState?: any
  onSuccess?: (result: any) => any
  onError?: (error: Error) => any
  data?: any
}

interface ReducerAction {
  type?: STATE_ACTIONS
  payload?: payload
  entityName?: keyof GlobalState
}

interface stateEntity {
  entities?: Product[],
  requestStatus?: REQUEST_STATUSES
  error?: Error
}

interface GlobalState {
  products?: stateEntity,
  contact?: stateEntity
}

// * business logic
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

interface Contact {
  firstName: string
  lastName: string
  email: string
  subject: string
}
