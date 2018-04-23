import getAll from './getAll'
import get from './get'
import post from './post'
import patch from './patch'
import deleteUser from './delete'
import search from './search'

export const HOST = 'https://api.userapi.io'

export const endpoints = [
  getAll,
  get,
  post,
  patch,
  deleteUser,
  search
]

